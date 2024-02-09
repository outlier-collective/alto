export const EntryPointAbi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "preOpGas",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "paid",
                type: "uint256"
            },
            {
                internalType: "uint48",
                name: "validAfter",
                type: "uint48"
            },
            {
                internalType: "uint48",
                name: "validUntil",
                type: "uint48"
            },
            {
                internalType: "bool",
                name: "targetSuccess",
                type: "bool"
            },
            {
                internalType: "bytes",
                name: "targetResult",
                type: "bytes"
            }
        ],
        name: "ExecutionResult",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "opIndex",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "reason",
                type: "string"
            }
        ],
        name: "FailedOp",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            }
        ],
        name: "SenderAddressResult",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "aggregator",
                type: "address"
            }
        ],
        name: "SignatureValidationFailed",
        type: "error"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "preOpGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "prefund",
                        type: "uint256"
                    },
                    {
                        internalType: "bool",
                        name: "sigFailed",
                        type: "bool"
                    },
                    {
                        internalType: "uint48",
                        name: "validAfter",
                        type: "uint48"
                    },
                    {
                        internalType: "uint48",
                        name: "validUntil",
                        type: "uint48"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterContext",
                        type: "bytes"
                    }
                ],
                internalType: "struct IEntryPoint.ReturnInfo",
                name: "returnInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "stake",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "unstakeDelaySec",
                        type: "uint256"
                    }
                ],
                internalType: "struct IStakeManager.StakeInfo",
                name: "senderInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "stake",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "unstakeDelaySec",
                        type: "uint256"
                    }
                ],
                internalType: "struct IStakeManager.StakeInfo",
                name: "factoryInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "stake",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "unstakeDelaySec",
                        type: "uint256"
                    }
                ],
                internalType: "struct IStakeManager.StakeInfo",
                name: "paymasterInfo",
                type: "tuple"
            }
        ],
        name: "ValidationResult",
        type: "error"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "preOpGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "prefund",
                        type: "uint256"
                    },
                    {
                        internalType: "bool",
                        name: "sigFailed",
                        type: "bool"
                    },
                    {
                        internalType: "uint48",
                        name: "validAfter",
                        type: "uint48"
                    },
                    {
                        internalType: "uint48",
                        name: "validUntil",
                        type: "uint48"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterContext",
                        type: "bytes"
                    }
                ],
                internalType: "struct IEntryPoint.ReturnInfo",
                name: "returnInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "stake",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "unstakeDelaySec",
                        type: "uint256"
                    }
                ],
                internalType: "struct IStakeManager.StakeInfo",
                name: "senderInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "stake",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "unstakeDelaySec",
                        type: "uint256"
                    }
                ],
                internalType: "struct IStakeManager.StakeInfo",
                name: "factoryInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "stake",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "unstakeDelaySec",
                        type: "uint256"
                    }
                ],
                internalType: "struct IStakeManager.StakeInfo",
                name: "paymasterInfo",
                type: "tuple"
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "aggregator",
                        type: "address"
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "stake",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "unstakeDelaySec",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct IStakeManager.StakeInfo",
                        name: "stakeInfo",
                        type: "tuple"
                    }
                ],
                internalType: "struct IEntryPoint.AggregatorStakeInfo",
                name: "aggregatorInfo",
                type: "tuple"
            }
        ],
        name: "ValidationResultWithAggregation",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "factory",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "paymaster",
                type: "address"
            }
        ],
        name: "AccountDeployed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [],
        name: "BeforeExecution",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalDeposit",
                type: "uint256"
            }
        ],
        name: "Deposited",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "aggregator",
                type: "address"
            }
        ],
        name: "SignatureAggregatorChanged",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalStaked",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "unstakeDelaySec",
                type: "uint256"
            }
        ],
        name: "StakeLocked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "withdrawTime",
                type: "uint256"
            }
        ],
        name: "StakeUnlocked",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "withdrawAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "StakeWithdrawn",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "paymaster",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "success",
                type: "bool"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "actualGasCost",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "actualGasUsed",
                type: "uint256"
            }
        ],
        name: "UserOperationEvent",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "revertReason",
                type: "bytes"
            }
        ],
        name: "UserOperationRevertReason",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "withdrawAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "Withdrawn",
        type: "event"
    },
    {
        inputs: [],
        name: "SIG_VALIDATION_FAILED",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "initCode",
                type: "bytes"
            },
            {
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "paymasterAndData",
                type: "bytes"
            }
        ],
        name: "_validateSenderAndPaymaster",
        outputs: [],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32"
            }
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "depositTo",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "deposits",
        outputs: [
            {
                internalType: "uint112",
                name: "deposit",
                type: "uint112"
            },
            {
                internalType: "bool",
                name: "staked",
                type: "bool"
            },
            {
                internalType: "uint112",
                name: "stake",
                type: "uint112"
            },
            {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32"
            },
            {
                internalType: "uint48",
                name: "withdrawTime",
                type: "uint48"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "getDepositInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint112",
                        name: "deposit",
                        type: "uint112"
                    },
                    {
                        internalType: "bool",
                        name: "staked",
                        type: "bool"
                    },
                    {
                        internalType: "uint112",
                        name: "stake",
                        type: "uint112"
                    },
                    {
                        internalType: "uint32",
                        name: "unstakeDelaySec",
                        type: "uint32"
                    },
                    {
                        internalType: "uint48",
                        name: "withdrawTime",
                        type: "uint48"
                    }
                ],
                internalType: "struct IStakeManager.DepositInfo",
                name: "info",
                type: "tuple"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                internalType: "uint192",
                name: "key",
                type: "uint192"
            }
        ],
        name: "getNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "initCode",
                type: "bytes"
            }
        ],
        name: "getSenderAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple"
            }
        ],
        name: "getUserOpHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "sender",
                                type: "address"
                            },
                            {
                                internalType: "uint256",
                                name: "nonce",
                                type: "uint256"
                            },
                            {
                                internalType: "bytes",
                                name: "initCode",
                                type: "bytes"
                            },
                            {
                                internalType: "bytes",
                                name: "callData",
                                type: "bytes"
                            },
                            {
                                internalType: "uint256",
                                name: "callGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "verificationGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "preVerificationGas",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "maxFeePerGas",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "maxPriorityFeePerGas",
                                type: "uint256"
                            },
                            {
                                internalType: "bytes",
                                name: "paymasterAndData",
                                type: "bytes"
                            },
                            {
                                internalType: "bytes",
                                name: "signature",
                                type: "bytes"
                            }
                        ],
                        internalType: "struct UserOperation[]",
                        name: "userOps",
                        type: "tuple[]"
                    },
                    {
                        internalType: "contract IAggregator",
                        name: "aggregator",
                        type: "address"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct IEntryPoint.UserOpsPerAggregator[]",
                name: "opsPerAggregator",
                type: "tuple[]"
            },
            {
                internalType: "address payable",
                name: "beneficiary",
                type: "address"
            }
        ],
        name: "handleAggregatedOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct UserOperation[]",
                name: "ops",
                type: "tuple[]"
            },
            {
                internalType: "address payable",
                name: "beneficiary",
                type: "address"
            }
        ],
        name: "handleOps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint192",
                name: "key",
                type: "uint192"
            }
        ],
        name: "incrementNonce",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "callData",
                type: "bytes"
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "sender",
                                type: "address"
                            },
                            {
                                internalType: "uint256",
                                name: "nonce",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "callGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "verificationGasLimit",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "preVerificationGas",
                                type: "uint256"
                            },
                            {
                                internalType: "address",
                                name: "paymaster",
                                type: "address"
                            },
                            {
                                internalType: "uint256",
                                name: "maxFeePerGas",
                                type: "uint256"
                            },
                            {
                                internalType: "uint256",
                                name: "maxPriorityFeePerGas",
                                type: "uint256"
                            }
                        ],
                        internalType: "struct EntryPoint.MemoryUserOp",
                        name: "mUserOp",
                        type: "tuple"
                    },
                    {
                        internalType: "bytes32",
                        name: "userOpHash",
                        type: "bytes32"
                    },
                    {
                        internalType: "uint256",
                        name: "prefund",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "contextOffset",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preOpGas",
                        type: "uint256"
                    }
                ],
                internalType: "struct EntryPoint.UserOpInfo",
                name: "opInfo",
                type: "tuple"
            },
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            }
        ],
        name: "innerHandleOp",
        outputs: [
            {
                internalType: "uint256",
                name: "actualGasCost",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint192",
                name: "",
                type: "uint192"
            }
        ],
        name: "nonceSequenceNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct UserOperation",
                name: "op",
                type: "tuple"
            },
            {
                internalType: "address",
                name: "target",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "targetCallData",
                type: "bytes"
            }
        ],
        name: "simulateHandleOp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    }
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple"
            }
        ],
        name: "simulateValidation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            }
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "withdrawAmount",
                type: "uint256"
            }
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
    // {
    //     stateMutability: "payable",
    //     type: "receive"
    // }
] as const

export const EntryPoint_bytecode =
    "0x60a08060405234620000895760016002556102148181016001600160401b038111838210176200007357829162005bdf833903906000f080156200006757608052604051615b5090816200008f823960805181818161136801528181613d27015261403a0152f35b6040513d6000823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe60806040526004361015610023575b361561001957600080fd5b610021615399565b005b60003560e01c80630396cb60146101635780630bd28e3b1461015e5780631b2e01b8146101595780631d732756146101545780631fad948c1461014f578063205c28781461014a57806335567e1a146101455780634b1d7cf5146101405780635287ce121461013b57806370a08231146101365780638f41ec5a14610131578063957122ab1461012c5780639b249f6914610127578063a619353114610122578063b760faf91461011d578063bb9fe6bf14610118578063c23a5cea14610113578063d6383f941461010e578063ee219423146101095763fc7e286d0361000e57611b4a565b611933565b6117cc565b611634565b6114b7565b611479565b611459565b6112c3565b6110f1565b6110b7565b611033565b610ee4565b610b89565b610ac5565b610927565b61084e565b61067c565b610415565b610334565b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103085760043563ffffffff8116808203610308576103037fa5ae833d0bb1dcd632d98a8b70973e8516812898e19bf27b70071ebc8dc52c01916102206101f03373ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b916101fc8115156154f1565b610219610210600185015463ffffffff1690565b63ffffffff1690565b1115615556565b54926102e56dffffffffffffffffffffffffffff946102a361024734888460781c16612098565b966102538815156155bb565b61025f81891115615620565b6102838161026b610590565b941684906dffffffffffffffffffffffffffff169052565b6001602084015287166dffffffffffffffffffffffffffff166040830152565b63ffffffff83166060820152600060808201526102e03373ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b615685565b6040805194855263ffffffff90911660208501523393918291820190565b0390a2005b600080fd5b6024359077ffffffffffffffffffffffffffffffffffffffffffffffff8216820361030857565b346103085760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103085760043577ffffffffffffffffffffffffffffffffffffffffffffffff81168103610308576103c29033600052600160205260406000209077ffffffffffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b6103cc8154612354565b9055005b73ffffffffffffffffffffffffffffffffffffffff81160361030857565b602435906103fb826103d0565b565b60c435906103fb826103d0565b35906103fb826103d0565b346103085760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103085760206104a9600435610455816103d0565b73ffffffffffffffffffffffffffffffffffffffff61047261030d565b91166000526001835260406000209077ffffffffffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54604051908152f35b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60a0810190811067ffffffffffffffff8211176104fd57604052565b6104b2565b610100810190811067ffffffffffffffff8211176104fd57604052565b67ffffffffffffffff81116104fd57604052565b6060810190811067ffffffffffffffff8211176104fd57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176104fd57604052565b604051906103fb826104e1565b6040519060c0820182811067ffffffffffffffff8211176104fd57604052565b604051906040820182811067ffffffffffffffff8211176104fd57604052565b67ffffffffffffffff81116104fd57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b929192610623826105dd565b91610631604051938461054f565b829481845281830111610308578281602093846000960137010152565b9181601f840112156103085782359167ffffffffffffffff8311610308576020838186019501011161030857565b34610308576101c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103085767ffffffffffffffff6004358181116103085736602382011215610308576106de903690602481600401359101610617565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdc36016101808112610308576101006040519161071b836104e1565b126103085760405161072c81610502565b6107346103ee565b815260443560208201526064356040820152608435606082015260a435608082015261075e6103fd565b60a082015260e43560c08201526101043560e082015281526101243560208201526101443560408201526101643560608201526101843560808201526101a435918211610308576107d2926107ba6107c293369060040161064e565b929091612759565b6040519081529081906020820190565b0390f35b9060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8301126103085760043567ffffffffffffffff9283821161030857806023830112156103085781600401359384116103085760248460051b8301011161030857602401919060243561084b816103d0565b90565b346103085761085c366107d6565b610867929192615aad565b61087083611c7a565b60005b8481106108f057506000927fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f9728480a183915b8583106108c0576108b68585611d9f565b6100216001600255565b9091936001906108e66108d4878987611d2f565b6108de8886611d16565b519088612202565b01940191906108a5565b8061091e610917610905600194869896611d16565b51610911848a88611d2f565b846132da565b9083612dc2565b01929092610873565b346103085760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261030857600435610962816103d0565b6024359060009133835282602052604083206dffffffffffffffffffffffffffff81541692838311610a6757848373ffffffffffffffffffffffffffffffffffffffff829593610a0a84966109d16109be8798610a649c612086565b6dffffffffffffffffffffffffffff1690565b6dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b6040805173ffffffffffffffffffffffffffffffffffffffff831681526020810185905233917fd1c19fbcd4551a5edfb66d43d2e337c04837afda3482b42bdf569a8fccdae5fb91a2165af1610a5e611d6f565b506159fc565b80f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f576974686472617720616d6f756e7420746f6f206c61726765000000000000006044820152fd5b346103085760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610308576020600435610b02816103d0565b73ffffffffffffffffffffffffffffffffffffffff610b1f61030d565b911660005260018252610b5a8160406000209077ffffffffffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000006040519260401b16178152f35b3461030857610b97366107d6565b610b9f615aad565b6000805b838210610d8657610bb49150611c7a565b7fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972600080a16000805b848110610cec57505060008093815b818110610c23576108b6868660007f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d8180a2611d9f565b610c87610c3182848a612381565b610c5c610c43610c4360208401612415565b73ffffffffffffffffffffffffffffffffffffffff1690565b7f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d600080a2806123c1565b906000915b808310610ca457505050610c9f90612354565b610bec565b90919497610cdf610cd9610ce592610cd38c8b610ccc82610cc68e8b8d611d2f565b92611d16565b5191612202565b90612098565b99612354565b95612354565b9190610c8c565b610cf7818688612381565b6020610d0f610d0683806123c1565b92909301612415565b9173ffffffffffffffffffffffffffffffffffffffff60009316905b828410610d445750505050610d3f90612354565b610bdd565b90919294610cdf81610d7985610d72610d60610d7e968d611d16565b51610d6c8c8b8a611d2f565b856132da565b908b612fda565b612354565b929190610d2b565b610d91828587612381565b90610d9c82806123c1565b92610dac610c4360208301612415565b9173ffffffffffffffffffffffffffffffffffffffff8316610dd1600182141561241f565b610df2575b505050610dec91610de691612098565b91612354565b90610ba3565b909592610e0b6040999693999895989788810190611e90565b92908a3b156103085789938b918a5193849283927fe3563a4f00000000000000000000000000000000000000000000000000000000845260049e8f850193610e52946125b9565b03815a93600094fa9081610ecb575b50610eb55786517f86a9f75000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a16818a0190815281906020010390fd5b0390fd5b9497509295509093509181610de6610dec610dd6565b80610ed8610ede9261051f565b806110ac565b38610e61565b346103085760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610308576107d273ffffffffffffffffffffffffffffffffffffffff600435610f37816103d0565b608060409283928351610f49816104e1565b600093818580935282602082015282878201528260608201520152168152806020522090610fd865ffffffffffff6001835194610f85866104e1565b80546dffffffffffffffffffffffffffff8082168852607082901c60ff161515602089015260789190911c1685870152015463ffffffff8116606086015260201c16608084019065ffffffffffff169052565b5191829182919091608065ffffffffffff8160a08401956dffffffffffffffffffffffffffff808251168652602082015115156020870152604082015116604086015263ffffffff6060820151166060860152015116910152565b346103085760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103085773ffffffffffffffffffffffffffffffffffffffff600435611083816103d0565b16600052600060205260206dffffffffffffffffffffffffffff60406000205416604051908152f35b600091031261030857565b346103085760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261030857602060405160018152f35b346103085760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261030857600467ffffffffffffffff813581811161030857611141903690840161064e565b905060243591611150836103d0565b60443590811161030857611167903690850161064e565b9290911590816112b9575b506112525760148210156111c2575b610eb1836040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160409060208152600060208201520190565b6111d26111de926111d892612a22565b90612a30565b60601c90565b3b156111eb573880611181565b610eb1906040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160609060208152601b60208201527f41413330207061796d6173746572206e6f74206465706c6f796564000000000060408201520190565b610eb1836040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352820160609060208152601960208201527f41413230206163636f756e74206e6f74206465706c6f7965640000000000000060408201520190565b90503b1538611172565b346103085760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103085760043567ffffffffffffffff81116103085761131290369060040161064e565b906113486040519283927f570e1a3600000000000000000000000000000000000000000000000000000000845260048401612bc6565b0360208273ffffffffffffffffffffffffffffffffffffffff92816000857f0000000000000000000000000000000000000000000000000000000000000000165af19081156113fc576024926000926113cc575b50604051917f6ca7b806000000000000000000000000000000000000000000000000000000008352166004820152fd5b6113ee91925060203d81116113f5575b6113e6818361054f565b810190612bb1565b903861139c565b503d6113dc565b61204b565b90816101609103126103085790565b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc820112610308576004359067ffffffffffffffff82116103085761084b91600401611401565b3461030857602061147161146c36611410565b6128b4565b604051908152f35b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610308576100216004356114b2816103d0565b615485565b34610308576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112611631573381528060205260408120600181019063ffffffff8254169081156115d35761157061153561159893611527611522855460ff9060701c1690565b6157e9565b65ffffffffffff421661584e565b84547fffffffffffffffffffffffffffffffffffffffffffff000000000000ffffffff16602082901b69ffffffffffff000000001617909455565b7fffffffffffffffffffffffffffffffffff00ffffffffffffffffffffffffffff8154169055565b60405165ffffffffffff91909116815233907ffa9b3c14cc825c412c9ed81b3ba365a5b459439403f18829e572ed53a4180f0a90602090a280f35b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f74207374616b6564000000000000000000000000000000000000000000006044820152fd5b80fd5b346103085760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103085760043561166f816103d0565b610a6473ffffffffffffffffffffffffffffffffffffffff6116b13373ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b926117696116d46109be86546dffffffffffffffffffffffffffff9060781c1690565b946116e0861515615868565b6117416001820161171965ffffffffffff611705835465ffffffffffff9060201c1690565b166117118115156158cd565b421015615932565b80547fffffffffffffffffffffffffffffffffffffffffffff00000000000000000000169055565b7fffffff0000000000000000000000000000ffffffffffffffffffffffffffffff8154169055565b6040805173ffffffffffffffffffffffffffffffffffffffff831681526020810186905233917fb7c918e0e249f999e965cafeb6c664271b3f4317d296461500e71da39f0cbda391a2600080809581948294165af16117c6611d6f565b50615997565b346103085760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103085767ffffffffffffffff6004358181116103085761181c903690600401611401565b60243591611829836103d0565b60443590811161030857611844610eb191369060040161064e565b61184c611c17565b61185585612cc5565b61186861186282876130d2565b90615222565b94611878826000924384526120a5565b96438252819360609573ffffffffffffffffffffffffffffffffffffffff83166118ff575b5050505060800151936118cc60406118be602084015165ffffffffffff1690565b92015165ffffffffffff1690565b906040519687967f8b7ac98000000000000000000000000000000000000000000000000000000000885260048801612689565b83955083949650611919604094929394518094819361267b565b03925af1906080611928611d6f565b92919038808061189d565b346103085761194136611410565b611949611c17565b61195282612cc5565b61195c81836130d2565b825160a001519193916119899073ffffffffffffffffffffffffffffffffffffffff16615344565b615344565b906119ad611984855173ffffffffffffffffffffffffffffffffffffffff90511690565b946119b66129f8565b506119e56119c960409586810190611e90565b90600060148310611b4257506111d2611984926111d892612a22565b916119ef91615222565b805173ffffffffffffffffffffffffffffffffffffffff169073ffffffffffffffffffffffffffffffffffffffff821660018114916080880151978781015191886020820151611a449065ffffffffffff1690565b91015165ffffffffffff16916060015192611a5d61059d565b9a8b5260208b0152841515898b015265ffffffffffff1660608a015265ffffffffffff16608089015260a088015215159081611b39575b50611ace5750610eb192519485947fe0cff05f00000000000000000000000000000000000000000000000000000000865260048601612b57565b9190610eb193611add84615344565b611b04611ae86105bd565b73ffffffffffffffffffffffffffffffffffffffff9096168652565b6020850152519586957ffaecb4e400000000000000000000000000000000000000000000000000000000875260048701612ac5565b90501538611a94565b915050615344565b346103085760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126103085773ffffffffffffffffffffffffffffffffffffffff600435611b9a816103d0565b16600052600060205260a0604060002065ffffffffffff60018254920154604051926dffffffffffffffffffffffffffff90818116855260ff8160701c161515602086015260781c16604084015263ffffffff8116606084015260201c166080820152f35b67ffffffffffffffff81116104fd5760051b60200190565b60405190611c24826104e1565b604051608083611c3383610502565b60009283815283602082015283604082015283606082015283838201528360a08201528360c08201528360e082015281528260208201528260408201528260608201520152565b90611c8482611bff565b611c91604051918261054f565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0611cbf8294611bff565b019060005b828110611cd057505050565b602090611cdb611c17565b82828501015201611cc4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8051821015611d2a5760209160051b010190565b611ce7565b9190811015611d2a5760051b810135907ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffea181360301821215610308570190565b3d15611d9a573d90611d80826105dd565b91611d8e604051938461054f565b82523d6000602084013e565b606090565b73ffffffffffffffffffffffffffffffffffffffff168015611e3257600080809381935af1611dcc611d6f565b5015611dd457565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f41413931206661696c65642073656e6420746f2062656e6566696369617279006044820152fd5b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4141393020696e76616c69642062656e656669636961727900000000000000006044820152fd5b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610308570180359067ffffffffffffffff82116103085760200191813603831361030857565b90816020910312610308575190565b601f82602094937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0938186528686013760008582860101520116010190565b60005b838110611f425750506000910152565b8181015183820152602001611f32565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093611f8e81518092818752878088019101611f2f565b0116010190565b90611faf60809161084b96946101c0808652850191611ef0565b9360e0815173ffffffffffffffffffffffffffffffffffffffff80825116602087015260208201516040870152604082015160608701526060820151858701528482015160a087015260a08201511660c086015260c081015182860152015161010084015260208101516101208401526040810151610140840152606081015161016084015201516101808201526101a0818403910152611f52565b6040513d6000823e3d90fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9190820391821161209357565b612057565b9190820180921161209357565b905a918160206120be6060830151936060810190611e90565b906120f78560405195869485947f1d73275600000000000000000000000000000000000000000000000000000000865260048601611f95565b03816000305af1600091816121d2575b506121cb575060206000803e7fdeaddead000000000000000000000000000000000000000000000000000000006000511461215e5761215861214d61084b945a90612086565b608084015190612098565b91614972565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152600f60408201527f41413935206f7574206f6620676173000000000000000000000000000000000060608201520190565b9250505090565b6121f491925060203d81116121fb575b6121ec818361054f565b810190611ee1565b9038612107565b503d6121e2565b909291925a9380602061221e6060830151946060810190611e90565b906122578660405195869485947f1d73275600000000000000000000000000000000000000000000000000000000865260048601611f95565b03816000305af160009181612334575b5061232d575060206000803e7fdeaddead00000000000000000000000000000000000000000000000000000000600051146122bf576122b96122ae61084b95965a90612086565b608083015190612098565b92614c55565b610eb1836040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152600f60408201527f41413935206f7574206f6620676173000000000000000000000000000000000060608201520190565b9450505050565b61234d91925060203d81116121fb576121ec818361054f565b9038612267565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146120935760010190565b9190811015611d2a5760051b810135907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa181360301821215610308570190565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe181360301821215610308570180359067ffffffffffffffff821161030857602001918160051b3603831361030857565b3561084b816103d0565b1561242657565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4141393620696e76616c69642061676772656761746f720000000000000000006044820152fd5b90357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18236030181121561030857016020813591019167ffffffffffffffff821161030857813603831361030857565b61084b916124ff816124e58461040a565b73ffffffffffffffffffffffffffffffffffffffff169052565b6020820135602082015261259a61254b61253061251f6040860186612484565b610160806040880152860191611ef0565b61253d6060860186612484565b908583036060870152611ef0565b6080840135608084015260a084013560a084015260c084013560c084015260e084013560e0840152610100808501359084015261012061258d81860186612484565b9185840390860152611ef0565b916125ab6101409182810190612484565b929091818503910152611ef0565b949391929083604087016040885252606086019360608160051b8801019482600090815b8483106125fc5750505050505084602061084b95968503910152611ef0565b9091929394977fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08b820301855288357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffea184360301811215612677576001918461266592016124d4565b986020908101969501930191906125dd565b8280fd5b908092918237016000815290565b92909361084b96959260c0958552602085015265ffffffffffff8092166040850152166060830152151560808201528160a08201520190611f52565b156126cc57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4141393220696e7465726e616c2063616c6c206f6e6c790000000000000000006044820152fd5b90604061084b92600081528160208201520190611f52565b60409061084b939281528160208201520190611f52565b909291925a9361276a3033146126c5565b8151946040860151955a61138860608301518901011161288a5761084b9660009580516127b1575b505050906127ab915a9003608084015101943691610617565b91614ebd565b6127e0916127dc916127d7855173ffffffffffffffffffffffffffffffffffffffff1690565b615a6c565b1590565b6127ec575b8080612792565b6127ab929194506127fb615a7e565b90815161280f575b505060019390916127e5565b7f1c4fada7374c0a9ee8841fc38afe82932dc0f8e69012e927f061a8bae611a20173ffffffffffffffffffffffffffffffffffffffff602087015192612880602061286e835173ffffffffffffffffffffffffffffffffffffffff1690565b92015195604051938493169683612742565b0390a33880612803565b7fdeaddead0000000000000000000000000000000000000000000000000000000060005260206000fd5b6128ca6128c46040830183611e90565b90615a61565b906128db6128c46060830183611e90565b906129916128f06128c4610120840184611e90565b60405194859360208501956101008201359260e08301359260c08101359260a08201359260808301359273ffffffffffffffffffffffffffffffffffffffff60208201359135168c9693909a9998959261012098959273ffffffffffffffffffffffffffffffffffffffff6101408a019d168952602089015260408801526060870152608086015260a085015260c084015260e08301526101008201520152565b03916129c37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09384810183528261054f565b519020604080516020810192835230918101919091524660608201526080928301815290916129f2908261054f565b51902090565b604051906040820182811067ffffffffffffffff8211176104fd5760405260006020838281520152565b906014116103085790601490565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000009035818116939260148110612a6557505050565b60140360031b82901b16169150565b9060c060a061084b93805184526020810151602085015260408101511515604085015265ffffffffffff80606083015116606086015260808201511660808501520151918160a08201520190611f52565b9294612b266103fb95612b14610100959998612b02612aee602097610140808c528b0190612a74565b9b878a019060208091805184520151910152565b80516060890152602001516080880152565b805160a08701526020015160c0860152565b73ffffffffffffffffffffffffffffffffffffffff81511660e0850152015191019060208091805184520151910152565b612ba06103fb94612b8e612b7960a0959998969960e0865260e0860190612a74565b98602085019060208091805184520151910152565b80516060840152602001516080830152565b019060208091805184520151910152565b90816020910312610308575161084b816103d0565b91602061084b938181520191611ef0565b90612c0673ffffffffffffffffffffffffffffffffffffffff9161084b97959694606085526060850191611ef0565b941660208201526040818503910152611ef0565b60009060033d11612c2757565b905060046000803e60005160e01c90565b600060443d1061084b576040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc91823d016004833e815167ffffffffffffffff918282113d602484011117612cb457818401948551938411612cbc573d85010160208487010111612cb4575061084b9291016020019061054f565b949350505050565b50949350505050565b612cd26040820182611e90565b612cea612cde84612415565b93610120810190611e90565b9290303b1561030857600093612d2e9160405196879586957f957122ab00000000000000000000000000000000000000000000000000000000875260048701612bd7565b0381305afa9081612daf575b506103fb576001612d49612c1a565b6308c379a014612d5a575b6113fc57565b612d62612c38565b80612d6e575b50612d54565b80516000925015612d6857610eb1906040519182917f220266b60000000000000000000000000000000000000000000000000000000083526004830161272a565b80610ed8612dbc9261051f565b38612d3a565b9190612dcd90613011565b73ffffffffffffffffffffffffffffffffffffffff92918316612f6c57612efe57612df790613011565b9116612e9057612e045750565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152602160448201527f41413332207061796d61737465722065787069726564206f72206e6f7420647560648201527f6500000000000000000000000000000000000000000000000000000000000000608482015260a490fd5b610eb1826040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601460408201527f41413334207369676e6174757265206572726f7200000000000000000000000060608201520190565b610eb1836040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601760408201527f414132322065787069726564206f72206e6f742064756500000000000000000060608201520190565b610eb1846040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601460408201527f41413234207369676e6174757265206572726f7200000000000000000000000060608201520190565b929190612fe690613011565b909273ffffffffffffffffffffffffffffffffffffffff80809516911603612f6c57612efe57612df7905b801561306457613020906151c7565b73ffffffffffffffffffffffffffffffffffffffff65ffffffffffff806040840151164211908115613054575b5091511691565b905060208301511642103861304d565b50600090600090565b1561307457565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f41413934206761732076616c756573206f766572666c6f7700000000000000006044820152fd5b916000915a938151906130e58282613545565b6130ee816128b4565b602084015261312c6effffffffffffffffffffffffffffff60808401516060850151176040850151176101008401359060e08501351717111561306d565b61313582613607565b6131408185846136c8565b97906131716127dc613166875173ffffffffffffffffffffffffffffffffffffffff1690565b6020880151906152d4565b61326d5761317e43600052565b73ffffffffffffffffffffffffffffffffffffffff6131b660a0606097015173ffffffffffffffffffffffffffffffffffffffff1690565b16613253575b505a810360a0840135106131e65760809360c092604087015260608601525a900391013501910152565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152601e60408201527f41413430206f76657220766572696669636174696f6e4761734c696d6974000060608201520190565b9093508161326492975085846143d2565b959092386131bc565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152601a60408201527f4141323520696e76616c6964206163636f756e74206e6f6e636500000000000060608201520190565b9290916000925a82516132ed8184613545565b6132f6836128b4565b60208501526133346effffffffffffffffffffffffffffff60808301516060840151176040840151176101008601359060e08701351717111561306d565b61333d81613607565b6133498186868b613a34565b989061337a6127dc61336f865173ffffffffffffffffffffffffffffffffffffffff1690565b6020870151906152d4565b6134725761338743600052565b73ffffffffffffffffffffffffffffffffffffffff6133bf60a0606096015173ffffffffffffffffffffffffffffffffffffffff1690565b16613457575b505a840360a0860135106133f15750604085015260608401526080919060c0905a900391013501910152565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152601e60448201527f41413430206f76657220766572696669636174696f6e4761734c696d697400006064820152608490fd5b90925081613469929850868685614665565b969091386133c5565b610eb1826040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601a60408201527f4141323520696e76616c6964206163636f756e74206e6f6e636500000000000060608201520190565b156134e757565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4141393320696e76616c6964207061796d6173746572416e64446174610000006044820152fd5b6135b79061356f61355582612415565b73ffffffffffffffffffffffffffffffffffffffff168452565b602081013560208401526080810135604084015260a0810135606084015260c0810135608084015260e081013560c084015261010081013560e0840152610120810190611e90565b9081156135fc576135e16111d86111d28460a0946135dc60146103fb999810156134e0565b612a22565b73ffffffffffffffffffffffffffffffffffffffff16910152565b505060a06000910152565b60a081015173ffffffffffffffffffffffffffffffffffffffff16156136495760c060035b60ff60408401519116606084015102016080830151019101510290565b60c0600161362c565b61366a604092959493956060835260608301906124d4565b9460208201520152565b906103fb602f60405180947f414132332072657665727465643a20000000000000000000000000000000000060208301526136b88151809260208686019101611f2f565b810103600f81018552018361054f565b916000926000925a9361379660208351936136f7855173ffffffffffffffffffffffffffffffffffffffff1690565b9561370f6137086040830183611e90565b9084613c9f565b60a086015173ffffffffffffffffffffffffffffffffffffffff169061373443600052565b85809373ffffffffffffffffffffffffffffffffffffffff8094161598896139cc575b60600151908601516040517f3a871cdd000000000000000000000000000000000000000000000000000000008152978896879586939060048501613652565b03938a1690f18291816139ac575b506139a357506001906137b5612c1a565b6308c379a01461394f575b506138e2575b6137d3575b50505a900391565b6137fd9073ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b6138186109be82546dffffffffffffffffffffffffffff1690565b8083116138755761386e926dffffffffffffffffffffffffffff9103166dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b38806137cb565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152601760408201527f41413231206469646e2774207061792070726566756e6400000000000000000060608201520190565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152601660408201527f4141323320726576657274656420286f72204f4f47290000000000000000000060608201520190565b613957612c38565b908161396357506137c0565b610eb1916139719150613674565b6040519182917f220266b60000000000000000000000000000000000000000000000000000000083526004830161272a565b95506137c69050565b6139c591925060203d81116121fb576121ec818361054f565b90386137a4565b9450613a126109be6139fe8c73ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b546dffffffffffffffffffffffffffff1690565b8b811115613a295750856060835b96915050613757565b606087918d03613a20565b90926000936000935a94613a7d6020835193613a64855173ffffffffffffffffffffffffffffffffffffffff1690565b9561370f613a756040830183611e90565b90848c613faf565b03938a1690f1829181613c7f575b50613c765750600190613a9c612c1a565b6308c379a014613c20575b50613bb2575b613abb575b5050505a900391565b613ae59073ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b91613b016109be84546dffffffffffffffffffffffffffff1690565b90818311613b4c575082547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000169190036dffffffffffffffffffffffffffff16179055388080613ab2565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152601760448201527f41413231206469646e2774207061792070726566756e640000000000000000006064820152608490fd5b610eb1846040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601660408201527f4141323320726576657274656420286f72204f4f47290000000000000000000060608201520190565b613c28612c38565b9081613c345750613aa7565b8691613c409150613674565b90610eb16040519283927f220266b600000000000000000000000000000000000000000000000000000000845260048401612742565b9650613aad9050565b613c9891925060203d81116121fb576121ec818361054f565b9038613a8b565b909180613cab57505050565b81515173ffffffffffffffffffffffffffffffffffffffff1692833b613f4257606083510151604051907f570e1a3600000000000000000000000000000000000000000000000000000000825260208280613d0a878760048401612bc6565b0381600073ffffffffffffffffffffffffffffffffffffffff95867f00000000000000000000000000000000000000000000000000000000000000001690f19182156113fc57600092613f22575b50808216958615613eb55716809503613e48573b15613ddb576111d86111d27fd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d93613da293612a22565b602083810151935160a001516040805173ffffffffffffffffffffffffffffffffffffffff9485168152939091169183019190915290a3565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152602060408201527f4141313520696e6974436f6465206d757374206372656174652073656e64657260608201520190565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152602060408201527f4141313420696e6974436f6465206d7573742072657475726e2073656e64657260608201520190565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152601b60408201527f4141313320696e6974436f6465206661696c6564206f72204f4f47000000000060608201520190565b613f3b91925060203d81116113f5576113e6818361054f565b9038613d58565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152601f60408201527f414131302073656e64657220616c726561647920636f6e73747275637465640060608201520190565b92909181613fbe575b50505050565b82515173ffffffffffffffffffffffffffffffffffffffff1693843b61425857606084510151604051907f570e1a360000000000000000000000000000000000000000000000000000000082526020828061401d888860048401612bc6565b0381600073ffffffffffffffffffffffffffffffffffffffff95867f00000000000000000000000000000000000000000000000000000000000000001690f19182156113fc57600092614238575b508082169687156141ca571680960361415c573b156140f657506111d86111d27fd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d936140b693612a22565b602083810151935160a001516040805173ffffffffffffffffffffffffffffffffffffffff9485168152939091169183019190915290a338808080613fb8565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152602060448201527f4141313520696e6974436f6465206d757374206372656174652073656e6465726064820152608490fd5b610eb1826040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152602060408201527f4141313420696e6974436f6465206d7573742072657475726e2073656e64657260608201520190565b610eb1846040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601b60408201527f4141313320696e6974436f6465206661696c6564206f72204f4f47000000000060608201520190565b61425191925060203d81116113f5576113e6818361054f565b903861406b565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152601f60448201527f414131302073656e64657220616c726561647920636f6e7374727563746564006064820152608490fd5b156142c557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4141343120746f6f206c6974746c6520766572696669636174696f6e476173006044820152fd5b919060408382031261030857825167ffffffffffffffff81116103085783019080601f830112156103085781519161435a836105dd565b91614368604051938461054f565b838352602084830101116103085760209261438891848085019101611f2f565b92015190565b906103fb602f60405180947f414133332072657665727465643a20000000000000000000000000000000000060208301526136b88151809260208686019101611f2f565b93919260609460009460009380519261441160a08a860151956143f68888116142be565b015173ffffffffffffffffffffffffffffffffffffffff1690565b9161443c8373ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b946144586109be87546dffffffffffffffffffffffffffff1690565b968588106145f85773ffffffffffffffffffffffffffffffffffffffff60208a98946144ce8a966dffffffffffffffffffffffffffff8b6145079e03166dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b015194604051998a98899788937ff465c77e00000000000000000000000000000000000000000000000000000000855260048501613652565b0395169103f19081839184936145d2575b506145cb57505060019061452a612c1a565b6308c379a0146145a9575b5061453c57565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152601660408201527f4141333320726576657274656420286f72204f4f47290000000000000000000060608201520190565b6145b1612c38565b90816145bd5750614535565b610eb191613971915061438e565b9450925050565b9092506145f191503d8085833e6145e9818361054f565b810190614323565b9138614518565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152601e60408201527f41413331207061796d6173746572206465706f73697420746f6f206c6f77000060608201520190565b91949293909360609560009560009382519061468c60a08b840151936143f68486116142be565b936146b78573ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b6146d26109be82546dffffffffffffffffffffffffffff1690565b87811061482d579273ffffffffffffffffffffffffffffffffffffffff60208a989693946144ce8a966dffffffffffffffffffffffffffff8d61474c9e9c9a03166dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b0395169103f190818391849361480f575b5061480757505060019061476f612c1a565b6308c379a0146147e8575b506147825750565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152601660448201527f4141333320726576657274656420286f72204f4f4729000000000000000000006064820152608490fd5b6147f0612c38565b90816147fc575061477a565b613c4092505061438e565b955093505050565b90925061482691503d8085833e6145e9818361054f565b913861475d565b610eb18a6040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601e60408201527f41413331207061796d6173746572206465706f73697420746f6f206c6f77000060608201520190565b600311156148a557565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9291906148f260409160028652606060208701526060860190611f52565b930152565b9392919060038110156148a5576040916148f2918652606060208701526060860190611f52565b906103fb603660405180947f4141353020706f73744f702072657665727465643a200000000000000000000060208301526149628151809260208686019101611f2f565b810103601681018552018361054f565b929190925a9360009180519161498783615180565b9260a08101956149ab875173ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff93908481169081614b1a575050506149ec825173ffffffffffffffffffffffffffffffffffffffff1690565b985b5a90030193840297604084019089825110614aad577f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f94614a386020928c614aa8955103906153a2565b015194896020614a7a614a5f865173ffffffffffffffffffffffffffffffffffffffff1690565b9a5173ffffffffffffffffffffffffffffffffffffffff1690565b9401519785604051968796169a16988590949392606092608083019683521515602083015260408201520152565b0390a4565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152602060408201527f414135312070726566756e642062656c6f772061637475616c476173436f737460608201520190565b9a918051614b2a575b50506149ee565b6060850151600099509091803b15614c51579189918983614b7d956040518097819682957fa9a234090000000000000000000000000000000000000000000000000000000084528c0290600484016148d4565b0393f19081614c3e575b50614c39576001614b96612c1a565b6308c379a014614c1a575b614bad575b3880614b23565b6040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152601260408201527f4141353020706f73744f7020726576657274000000000000000000000000000060608201520190565b614c22612c38565b80614c2d5750614ba1565b613971610eb19161491e565b614ba6565b80610ed8614c4b9261051f565b38614b87565b8980fd5b9392915a90600092805190614c6982615180565b9360a0830196614c8d885173ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff95908681169081614d8357505050614cce845173ffffffffffffffffffffffffffffffffffffffff1690565b915b5a9003019485029860408301908a825110614d1d57507f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f949392614a38614aa8938c6020945103906153a2565b604080517f220266b600000000000000000000000000000000000000000000000000000000815260048101929092526024820152602060448201527f414135312070726566756e642062656c6f772061637475616c476173436f73746064820152608490fd5b93918051614d93575b5050614cd0565b606087015160009a509091803b15614eb957918a918a83614de6956040518097819682957fa9a234090000000000000000000000000000000000000000000000000000000084528c0290600484016148d4565b0393f19081614ea6575b50614ea1576001614dff612c1a565b6308c379a014614e84575b614e16575b3880614d8c565b610eb18b6040519182917f220266b600000000000000000000000000000000000000000000000000000000835260048301608091815260406020820152601260408201527f4141353020706f73744f7020726576657274000000000000000000000000000060608201520190565b614e8c612c38565b80614e975750614e0a565b613c408d9161491e565b614e0f565b80610ed8614eb39261051f565b38614df0565b8a80fd5b909392915a94805191614ecf83615180565b9260a0810195614ef3875173ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff938185169182614fdb57505050614f33825173ffffffffffffffffffffffffffffffffffffffff1690565b985b5a90030193840297604084019089825110614aad577f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f94614f7f6020928c614aa8955103906153a2565b614f888861489b565b015194896020614faf614a5f865173ffffffffffffffffffffffffffffffffffffffff1690565b940151604080519182529815602082015297880152606087015290821695909116939081906080820190565b9a918151614feb575b5050614f35565b878402614ff78a61489b565b60028a14615074576060860151823b156103085761504a93600080948d604051978896879586937fa9a23409000000000000000000000000000000000000000000000000000000008552600485016148f7565b0393f180156113fc57615061575b505b3880614fe4565b80610ed861506e9261051f565b38615058565b6060860151823b15610308576150bf93600080948d604051978896879586937fa9a23409000000000000000000000000000000000000000000000000000000008552600485016148f7565b0393f1908161516d575b506151685760016150d8612c1a565b6308c379a014615155575b1561505a576040517f220266b600000000000000000000000000000000000000000000000000000000815280610eb1600482016080906000815260406020820152601260408201527f4141353020706f73744f7020726576657274000000000000000000000000000060608201520190565b61515d612c38565b80614c2d57506150e3565b61505a565b80610ed861517a9261051f565b386150c9565b60e060c08201519101518082146151a45748018082101561519f575090565b905090565b5090565b604051906151b582610533565b60006040838281528260208201520152565b6151cf6151a8565b5065ffffffffffff808260a01c16801561521b575b604051926151f184610533565b73ffffffffffffffffffffffffffffffffffffffff8116845260d01c602084015216604082015290565b50806151e4565b61523761523d916152316151a8565b506151c7565b916151c7565b9073ffffffffffffffffffffffffffffffffffffffff91828251169283156152c9575b65ffffffffffff9283918260408160208501511693015116938360408160208401511692015116908084106152c1575b508085116152b9575b50604051956152a787610533565b16855216602084015216604082015290565b935038615299565b925038615290565b815181169350615260565b73ffffffffffffffffffffffffffffffffffffffff16600052600160205267ffffffffffffffff6153308260401c60406000209077ffffffffffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b9182549261533d84612354565b9055161490565b9073ffffffffffffffffffffffffffffffffffffffff6153626129f8565b9216600052600060205263ffffffff600160406000206dffffffffffffffffffffffffffff815460781c1685520154166020830152565b6103fb33615485565b73ffffffffffffffffffffffffffffffffffffffff16600052600060205260406000206dffffffffffffffffffffffffffff8082541692830180931161209357808311615427576103fb92166dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6465706f736974206f766572666c6f77000000000000000000000000000000006044820152fd5b73ffffffffffffffffffffffffffffffffffffffff906154a534826153a2565b168060005260006020527f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c460206dffffffffffffffffffffffffffff60406000205416604051908152a2565b156154f857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f6d757374207370656369667920756e7374616b652064656c61790000000000006044820152fd5b1561555d57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f63616e6e6f7420646563726561736520756e7374616b652074696d65000000006044820152fd5b156155c257565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6e6f207374616b652073706563696669656400000000000000000000000000006044820152fd5b1561562757565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f7374616b65206f766572666c6f770000000000000000000000000000000000006044820152fd5b9065ffffffffffff608060016103fb946156e56dffffffffffffffffffffffffffff86511682906dffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffff0000000000000000000000000000825416179055565b602085015115156eff000000000000000000000000000082549160701b16807fffffffffffffffffffffffffffffffffff00ffffffffffffffffffffffffffff83161783557fffffff000000000000000000000000000000ffffffffffffffffffffffffffff7cffffffffffffffffffffffffffff000000000000000000000000000000604089015160781b16921617178155019263ffffffff6060820151167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000008554161784550151167fffffffffffffffffffffffffffffffffffffffffffff000000000000ffffffff69ffffffffffff0000000083549260201b169116179055565b156157f057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f616c726561647920756e7374616b696e670000000000000000000000000000006044820152fd5b91909165ffffffffffff8080941691160191821161209357565b1561586f57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e6f207374616b6520746f2077697468647261770000000000000000000000006044820152fd5b156158d457565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f6d7573742063616c6c20756e6c6f636b5374616b6528292066697273740000006044820152fd5b1561593957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f5374616b65207769746864726177616c206973206e6f742064756500000000006044820152fd5b1561599e57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6661696c656420746f207769746864726177207374616b6500000000000000006044820152fd5b15615a0357565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f6661696c656420746f20776974686472617700000000000000000000000000006044820152fd5b816040519182372090565b9060009283809360208451940192f190565b3d610800808211615aa5575b50604051906020818301016040528082526000602083013e90565b905038615a8a565b6002805414615abc5760028055565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152fdfea26469706673582212209ddfe906020d25a57d0414d4c2acaaf56d4ac2bf9fa12d1822ac87460738d52964736f6c6343000812003360808060405234610016576101f8908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c63570e1a361461002857600080fd5b346100c95760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100c95760043567ffffffffffffffff918282116100c957366023830112156100c95781600401359283116100c95736602484840101116100c9576100c561009e84602485016100fb565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b0390f35b80fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90806014116101b85767ffffffffffffffff917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec82018381116101bd57604051937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81600b8701160116850190858210908211176101bd57604052808452602084019036848401116101b8576020946000600c819682946014880187378301015251923560601c5af19060005191156101b257565b60009150565b600080fd5b6100cc56fea2646970667358221220663a0f7beff423e948af368cc7797750122e118b12881907a95e27c67c4d62d964736f6c63430008120033"
