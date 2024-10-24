#!/bin/bash

echo "📦 Installing dependencies..."
pnpm install || { echo "❌ Failed to install dependencies"; exit 1; }

echo "🔨 Building the bundler..."
pnpm build || { echo "❌ Failed to build bundler"; exit 1; }

if pm2 list | grep -q "bundler"; then
    echo "🔄 Restarting bundler process..."
    pm2 restart bundler
else
    echo "🚀 Starting bundler with PM2..."
    pm2 start --name bundler --interpreter=bash --interpreter-args="--" "./alto" -- run --config "alto-config.json"
fi

echo "✅ Server successfully started!"
echo ""
echo "📝 Quick Commands:"
echo "  View logs:    pm2 logs bundler"
echo "  Status:       pm2 status"
echo "  Monitor:      pm2 monit"
echo "  Restart:      pm2 restart bundler"
echo "  Stop:         pm2 stop bundler"
