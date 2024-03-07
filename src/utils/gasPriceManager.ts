import {
    gasStationResult,
    type GasPriceParameters,
    RpcError
} from "@entrypoint-0.7/types"
import { parseGwei, type Chain, type PublicClient } from "viem"
import { type Logger, maxBigInt, minBigInt } from "@alto/utils"
import * as chains from "viem/chains"
import * as sentry from "@sentry/node"

export interface InterfaceGasPriceManager {
    getGasPrice(): Promise<GasPriceParameters>
    validateGasPrice(gasPrice: GasPriceParameters): void
}

enum ChainId {
    Goerli = 5,
    Polygon = 137,
    Mumbai = 80001,
    LineaTestnet = 59140,
    Linea = 59144
}

const MIN_POLYGON_GAS_PRICE = parseGwei("31")
const MIN_MUMBAI_GAS_PRICE = parseGwei("1")

function getGasStationUrl(chainId: ChainId.Polygon | ChainId.Mumbai): string {
    switch (chainId) {
        case ChainId.Polygon:
            return "https://gasstation.polygon.technology/v2"
        case ChainId.Mumbai:
            return "https://gasstation-testnet.polygon.technology/v2"
    }
}

export class GasPriceManager implements InterfaceGasPriceManager {
    private chain: Chain
    private publicClient: PublicClient
    private noEip1559Support: boolean
    private logger: Logger
    private queueMaxFeePerGas: { timestamp: number; maxFeePerGas: bigint }[] =
        [] // Store pairs of [price, timestamp]
    private queueMaxPriorityFeePerGas: {
        timestamp: number
        maxPriorityFeePerGas: bigint
    }[] = [] // Store pairs of [price, timestamp]
    private maxQueueSize

    constructor(
        chain: Chain,
        publicClient: PublicClient,
        noEip1559Support: boolean,
        logger: Logger,
        gasPriceTimeValidityInSeconds = 10
    ) {
        this.maxQueueSize = gasPriceTimeValidityInSeconds
        this.chain = chain
        this.publicClient = publicClient
        this.noEip1559Support = noEip1559Support
        this.logger = logger
    }

    private getDefaultGasFee(
        chainId: ChainId.Polygon | ChainId.Mumbai
    ): bigint {
        switch (chainId) {
            case ChainId.Polygon:
                return MIN_POLYGON_GAS_PRICE
            case ChainId.Mumbai:
                return MIN_MUMBAI_GAS_PRICE
            default:
                return 0n
        }
    }

    private async getPolygonGasPriceParameters(): Promise<GasPriceParameters | null> {
        const gasStationUrl = getGasStationUrl(this.chain.id)
        try {
            const data = await (await fetch(gasStationUrl)).json()
            // take the standard speed here, SDK options will define the extra tip
            const parsedData = gasStationResult.parse(data)

            return parsedData.fast
        } catch (e) {
            this.logger.error(
                { error: e },
                "failed to get gas price from gas station, using default"
            )
            return null
        }
    }

    private getBumpAmount(chainId: number) {
        if (chainId === chains.sepolia.id) {
            return 120n
        }

        if (chainId === chains.celo.id) {
            return 150n
        }

        if (
            chainId === chains.arbitrum.id ||
            chainId === chains.scroll.id ||
            chainId === chains.scrollSepolia.id ||
            chainId === chains.arbitrumGoerli.id ||
            chainId === chains.mainnet.id ||
            chainId === chains.mantle.id ||
            chainId === 22222 ||
            chainId === chains.sepolia.id ||
            chainId === chains.base.id ||
            chainId === chains.dfk.id ||
            chainId === chains.celoAlfajores.id ||
            chainId === chains.celoCannoli.id ||
            chainId === chains.avalanche.id
        ) {
            return 111n
        }

        return 100n
    }

    private bumpTheGasPrice(
        gasPriceParameters: GasPriceParameters
    ): GasPriceParameters {
        const bumpAmount = this.getBumpAmount(this.chain.id)

        const maxPriorityFeePerGas = maxBigInt(
            gasPriceParameters.maxPriorityFeePerGas,
            this.getDefaultGasFee(this.chain.id)
        )
        const maxFeePerGas = maxBigInt(
            gasPriceParameters.maxFeePerGas,
            maxPriorityFeePerGas
        )

        const result = {
            maxFeePerGas: (maxFeePerGas * bumpAmount) / 100n,
            maxPriorityFeePerGas: (maxPriorityFeePerGas * bumpAmount) / 100n
        }

        if (
            this.chain.id === chains.celo.id ||
            this.chain.id === chains.celoAlfajores.id ||
            this.chain.id === chains.celoCannoli.id
        ) {
            const maxFee = maxBigInt(
                result.maxFeePerGas,
                result.maxPriorityFeePerGas
            )
            return {
                maxFeePerGas: maxFee,
                maxPriorityFeePerGas: maxFee
            }
        }

        return result
    }

    private async getFallBackMaxPriorityFeePerGas(
        publicClient: PublicClient,
        gasPrice: bigint
    ): Promise<bigint> {
        const feeHistory = await publicClient.getFeeHistory({
            blockCount: 10,
            rewardPercentiles: [20],
            blockTag: "latest"
        })

        if (feeHistory.reward === undefined || feeHistory.reward === null) {
            return gasPrice
        }

        const feeAverage =
            feeHistory.reward.reduce((acc, cur) => cur[0] + acc, 0n) / 10n
        return minBigInt(feeAverage, gasPrice)
    }

    private async getNextBaseFee(publicClient: PublicClient) {
        const block = await publicClient.getBlock({
            blockTag: "latest"
        })
        const currentBaseFeePerGas =
            block.baseFeePerGas || (await publicClient.getGasPrice())
        const currentGasUsed = block.gasUsed
        const gasTarget = block.gasLimit / 2n

        if (currentGasUsed === gasTarget) {
            return currentBaseFeePerGas
        }

        if (currentGasUsed > gasTarget) {
            const gasUsedDelta = currentGasUsed - gasTarget
            const baseFeePerGasDelta = maxBigInt(
                (currentBaseFeePerGas * gasUsedDelta) / gasTarget / 8n,
                1n
            )
            return currentBaseFeePerGas + baseFeePerGasDelta
        }

        const gasUsedDelta = currentGasUsed - gasTarget
        const baseFeePerGasDelta =
            (currentBaseFeePerGas * gasUsedDelta) / gasTarget / 8n
        return currentBaseFeePerGas - baseFeePerGasDelta
    }

    private async getNoEip1559SupportGasPrice(): Promise<GasPriceParameters> {
        let gasPrice: bigint | undefined
        try {
            const gasInfo = await this.publicClient.estimateFeesPerGas({
                chain: this.chain,
                type: "legacy"
            })
            gasPrice = gasInfo.gasPrice
        } catch (e) {
            sentry.captureException(e)
            this.logger.error(
                "failed to fetch legacy gasPrices from estimateFeesPerGas",
                { error: e }
            )
            gasPrice = undefined
        }

        if (gasPrice === undefined) {
            this.logger.warn("gasPrice is undefined, using fallback value")
            try {
                gasPrice = await this.publicClient.getGasPrice()
            } catch (e) {
                this.logger.error("failed to get fallback gasPrice")
                sentry.captureException(e)
                throw e
            }
        }

        return {
            maxFeePerGas: gasPrice,
            maxPriorityFeePerGas: gasPrice
        }
    }

    private async estimateGasPrice(): Promise<GasPriceParameters> {
        let maxFeePerGas: bigint | undefined
        let maxPriorityFeePerGas: bigint | undefined
        try {
            const fees = await this.publicClient.estimateFeesPerGas({
                chain: this.chain
            })
            maxFeePerGas = fees.maxFeePerGas
            maxPriorityFeePerGas = fees.maxPriorityFeePerGas
        } catch (e) {
            sentry.captureException(e)
            this.logger.error(
                "failed to fetch eip-1559 gasPrices from estimateFeesPerGas",
                { error: e }
            )
            maxFeePerGas = undefined
            maxPriorityFeePerGas = undefined
        }

        if (maxPriorityFeePerGas === undefined) {
            this.logger.warn(
                "maxPriorityFeePerGas is undefined, using fallback value"
            )
            try {
                maxPriorityFeePerGas =
                    await this.getFallBackMaxPriorityFeePerGas(
                        this.publicClient,
                        maxFeePerGas ?? 0n
                    )
            } catch (e) {
                this.logger.error("failed to get fallback maxPriorityFeePerGas")
                sentry.captureException(e)
                throw e
            }
        }

        if (maxFeePerGas === undefined) {
            this.logger.warn("maxFeePerGas is undefined, using fallback value")
            try {
                maxFeePerGas =
                    (await this.getNextBaseFee(this.publicClient)) +
                    maxPriorityFeePerGas
            } catch (e) {
                this.logger.error("failed to get fallback maxFeePerGas")
                sentry.captureException(e)
                throw e
            }
        }

        if (maxPriorityFeePerGas === 0n) {
            maxPriorityFeePerGas = maxFeePerGas / 200n
        }

        return { maxFeePerGas, maxPriorityFeePerGas }
    }

    private saveMaxFeePerGas(gasPrice: bigint, timestamp: number) {
        const queue = this.queueMaxFeePerGas
        const last = queue.length > 0 ? queue[queue.length - 1] : null

        if (!last || timestamp - last.timestamp >= 1000) {
            if (queue.length >= this.maxQueueSize) {
                queue.shift()
            }
            queue.push({ maxFeePerGas: gasPrice, timestamp })
        } else if (gasPrice < last.maxFeePerGas) {
            last.maxFeePerGas = gasPrice
            last.timestamp = timestamp
        }
    }

    private saveMaxPriorityFeePerGas(gasPrice: bigint, timestamp: number) {
        const queue = this.queueMaxPriorityFeePerGas
        const last = queue.length > 0 ? queue[queue.length - 1] : null

        if (!last || timestamp - last.timestamp >= 1000) {
            if (queue.length >= this.maxQueueSize) {
                queue.shift()
            }
            queue.push({ maxPriorityFeePerGas: gasPrice, timestamp })
        } else if (gasPrice < last.maxPriorityFeePerGas) {
            last.maxPriorityFeePerGas = gasPrice
            last.timestamp = timestamp
        }
    }

    private saveGasPrice(gasPrice: GasPriceParameters, timestamp: number) {
        return new Promise<void>((resolve) => {
            this.saveMaxFeePerGas(gasPrice.maxFeePerGas, timestamp)
            this.saveMaxPriorityFeePerGas(
                gasPrice.maxPriorityFeePerGas,
                timestamp
            )
            resolve()
        })
    }

    public async getGasPrice(): Promise<GasPriceParameters> {
        let maxFeeFloor = 0n
        let maxPriorityFeeFloor = 0n

        if (this.chain.id === chains.dfk.id) {
            maxFeeFloor = 5_000_000_000n
            maxPriorityFeeFloor = 5_000_000_000n
        }

        if (
            this.chain.id === chains.polygon.id ||
            this.chain.id === chains.polygonMumbai.id
        ) {
            const polygonEstimate = await this.getPolygonGasPriceParameters()
            if (polygonEstimate) {
                const gasPrice = this.bumpTheGasPrice({
                    maxFeePerGas: polygonEstimate.maxFeePerGas,
                    maxPriorityFeePerGas: polygonEstimate.maxPriorityFeePerGas
                })
                this.saveGasPrice(
                    {
                        maxFeePerGas: maxBigInt(
                            gasPrice.maxFeePerGas,
                            maxFeeFloor
                        ),
                        maxPriorityFeePerGas: maxBigInt(
                            gasPrice.maxPriorityFeePerGas,
                            maxPriorityFeeFloor
                        )
                    },
                    Date.now()
                )
                return gasPrice
            }
        }

        if (this.noEip1559Support) {
            const gasPrice = this.bumpTheGasPrice(
                await this.getNoEip1559SupportGasPrice()
            )
            this.saveGasPrice(
                {
                    maxFeePerGas: maxBigInt(gasPrice.maxFeePerGas, maxFeeFloor),
                    maxPriorityFeePerGas: maxBigInt(
                        gasPrice.maxPriorityFeePerGas,
                        maxPriorityFeeFloor
                    )
                },
                Date.now()
            )
            return gasPrice
        }

        const { maxFeePerGas, maxPriorityFeePerGas } =
            await this.estimateGasPrice()

        const gasPrice = this.bumpTheGasPrice({
            maxFeePerGas,
            maxPriorityFeePerGas
        })
        this.saveGasPrice(
            {
                maxFeePerGas: maxBigInt(gasPrice.maxFeePerGas, maxFeeFloor),
                maxPriorityFeePerGas: maxBigInt(
                    gasPrice.maxPriorityFeePerGas,
                    maxPriorityFeeFloor
                )
            },
            Date.now()
        )
        return gasPrice
    }

    private async getMinMaxFeePerGas() {
        const queue = this.queueMaxFeePerGas
        if (queue.length === 0) {
            await this.getGasPrice()
        }

        return queue.reduce(
            (acc: bigint, cur) => minBigInt(cur.maxFeePerGas, acc),
            queue[0].maxFeePerGas
        )
    }

    private async getMinMaxPriorityFeePerGas() {
        const queue = this.queueMaxPriorityFeePerGas
        if (queue.length === 0) {
            await this.getGasPrice()
        }

        return queue.reduce(
            (acc, cur) => minBigInt(cur.maxPriorityFeePerGas, acc),
            queue[0].maxPriorityFeePerGas
        )
    }

    public async validateGasPrice(gasPrice: GasPriceParameters) {
        const lowestMaxFeePerGas = await this.getMinMaxFeePerGas()
        const lowestMaxPriorityFeePerGas =
            await this.getMinMaxPriorityFeePerGas()

        if (gasPrice.maxFeePerGas < lowestMaxFeePerGas) {
            throw new RpcError(
                `maxFeePerGas must be at least ${lowestMaxFeePerGas} (current maxFeePerGas: ${gasPrice.maxFeePerGas}) - use pimlico_getUserOperationGasPrice to get the current gas price`
            )
        }

        if (gasPrice.maxPriorityFeePerGas < lowestMaxPriorityFeePerGas) {
            throw new RpcError(
                `maxPriorityFeePerGas must be at least ${lowestMaxPriorityFeePerGas} (current maxPriorityFeePerGas: ${gasPrice.maxPriorityFeePerGas}) - use pimlico_getUserOperationGasPrice to get the current gas price`
            )
        }
    }
}
