#!/bin/bash
cd "$(dirname "$0")"

set -euo pipefail

# Install node_modules
printf "\360\237\215\272\t Installing development dependencies...  \n"
nvm install 20.10.0
nvm use v20.10.0

cd ../user-fe
pnpm install
popd
