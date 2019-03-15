#!/bin/bash

source ./utils/config.sh

echo -e "NPM version: " && npm -version
echo -e "Node version: " && node --version

# ==================================================
if [ "$#" -ne 1 ];  then
  echo -e "\nUSAGE: $0 \$LAMBDA_FUNCTION_NAME"; exit 1;
fi

# ==================================================
lambdaFunctionName=${1%/}
pushd "${LAMBDA_FUNCTION_DIR}/${lambdaFunctionName}"

if [ $? -ne 0 ]; then
  echo -e "\nUnknown lambda. Choose from the following.\n"
  ls -A ${LAMBDA_FUNCTION_DIR} | sort; exit 1;
fi

echo -e "\nExecuting unit test for ${lambdaFunctionName}..."
npm install
npm run test

if [ $? -ne 0 ]; then
  echo -e "\nUnit test failed"; exit 1;
fi

popd
echo -e "\nCompleted!"
# ==================================================
