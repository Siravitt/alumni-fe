#!/bin/bash
cd "$(dirname "$0")"

ROOT_DIR=$(git rev-parse --show-toplevel)

cd $ROOT_DIR/test

pip3 install -r requirements.txt
