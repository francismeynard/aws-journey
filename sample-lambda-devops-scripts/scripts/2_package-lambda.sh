#!/bin/bash

source ./utils/config.sh

# ==================================================
./1_run-test.sh ${1%/}

if [ $? -ne 0 ]; then
  exit 1;
fi

# ==================================================
lambdaFunctionName=${1%/}
echo -e "\nStart packaging ${lambdaFunctionName}..."

pushd "${LAMBDA_FUNCTION_DIR}/${lambdaFunctionName}"
rm -fr node_modules

npm install --production

if [ $? -ne 0 ]; then
  echo -e "\nnpm install failed"; exit 1;
fi

# ==================================================
packageVersion=$(node -p "require('./package.json').version")
packageZipFilename="target/${lambdaFunctionName}-${packageVersion}.zip"

mkdir -p target
rm -fr target/*

chmod -R 755 *
zip -r ${packageZipFilename} *.js package.json lib node_modules > /dev/null 2>&1

if [ $? -ne 0 ]; then
  echo -e "Error using zip. Trying to use win 7-zip..."
  "${WIN_7ZIP_DIR}" a ${packageZipFilename} *.js package.json lib node_modules > /dev/null 2>&1
fi

echo -e "\nSuccessfully created the following package..."
ls -l ${packageZipFilename}

popd
echo -e "\nCompleted!"
# ==================================================
