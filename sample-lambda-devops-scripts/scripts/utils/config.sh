#!/bin/bash

PROJECT_DIR="../../aws-lambda-devops-scripts"

LAMBDA_FUNCTION_DIR="$PROJECT_DIR/lambda"

WIN_7ZIP_DIR="/c/Program Files/7-Zip/7z.exe"

AWS_DEFAULT_REGION="ap-southeast-2"

pushd () { command pushd "$@" > /dev/null 2>&1; }
popd () { command popd "$@" > /dev/null 2>&1; }
