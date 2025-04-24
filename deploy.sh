#!/usr/bin/env bash
set -e

# Ensure CF_PROJECT_NAME is set
: "${CF_PROJECT_NAME:?Error: must set CF_PROJECT_NAME env var}"

# Ensure Wrangler is available
command -v wrangler >/dev/null 2>&1 || {
  echo "Error: wrangler CLI not found. Install with npm i -g @cloudflare/wrangler"
  exit 1
}

# Build & export
echo "📦 Installing & building (with static export)…"
npm install
npm run build   # now generates out/ thanks to next.config.js output: 'export'

# Choose deploy directory
DIR="out"
[ ! -d "$DIR" ] && DIR="pages"

# Get commit info
COMMIT_HASH=$(git rev-parse --short HEAD 2>/dev/null || echo manual)

# Deploy
echo "🚀 Deploying '$DIR' to Pages project '$CF_PROJECT_NAME' on branch '${CF_DEPLOY_BRANCH:-main}'…"
wrangler pages deploy "$DIR" \
  --project-name "$CF_PROJECT_NAME" \
  --branch "${CF_DEPLOY_BRANCH:-main}" \
  --commit-hash "$COMMIT_HASH" \
  --commit-message "Deploy via script"

echo "✅ Deployment complete! Live at https://${CF_PROJECT_NAME}.pages.dev"
