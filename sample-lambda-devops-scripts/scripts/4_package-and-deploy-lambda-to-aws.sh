#!/bin/bash

source ./utils/config.sh

# ==================================================
./2_package-lambda.sh ${1%/}

if [ $? -ne 0 ]; then
  exit 1;
fi

./3_deploy-lambda-to-aws.sh ${1%/} ${2%/}
# ==================================================
