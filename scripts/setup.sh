#!/bin/bash

# Setting up development tools
if ! ./scripts/setup-dev-tools.sh; then
    printf 'Setting up development tools... \t%s\n' "💔 FAIL"
fi

# Setting up development dependencies
if ! ./scripts/setup-dev-dependencies.sh; then
    printf 'Setting up development dependencies... \t%s\n' "💔 FAIL"
fi

if ! ./scripts/setup-pre-commit.sh; then
    printf 'Setting up pre-commit... \t%s\n' "💔 FAIL"
fi
