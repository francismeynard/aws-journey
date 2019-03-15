#!/bin/bash

source ./utils/config.sh

# ==================================================
lambdaFunctionName=${1%/}
pushd "${LAMBDA_FUNCTION_DIR}/${lambdaFunctionName}"

packageVersion=$(node -p "require('./package.json').version")
packageZipFilename="target/${lambdaFunctionName}-${packageVersion}.zip"

echo -e "\nDeploying lambda function...\n"
aws lambda update-function-code --function-name ${lambdaFunctionName} --zip-file fileb://${packageZipFilename} --region ${AWS_DEFAULT_REGION}

popd
echo -e "\nCompleted!"
# ==================================================
