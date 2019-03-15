# aws-lambda-devops-scripts

## Introduction

This project contains sample scripts on how to run unit test, create lambda zip file, and deploy zip to AWS using AWS CLI.

## Pre-requisite Tools
In order to execute the scripts, you need to install the following tools:

- Git Bash (with installed NPM and node)
- ZIP or Windows 7-Zip (for creating zip file for lambda)
- AWS CLI (for updating the lambda function in AWS)

## Scripts
Below are the scripts that will help in packaging and deploying lambda function in AWS.
These same scripts can be used Jenkins to package ZIP file, and invoke update lambda function.

| Name | Description |
| --------|---------|
|./1_run-test.sh|Script to run the unit test|
|./2_package.sh|Script to create zip file. Install lambda dependencies used --production mode|
|./3_deploy-lambda-to-aws|Script to update the lambda function in AWS|
|./4_package-and-deploy-lambda-to-aws|Script to run the unit test, package and update the lambda function in AWS|

### How to use the scripts?

1. Download the script folder (and probably place it anywhere in your project main directory)
2. Go to script folder and update the configutaions in utils/config.sh (i.e., PROJECT_DIR)
3. After updating the config.sh, you can now start using the scripts.

## Testing
This project contains a test lambda function, where you can use to test againsts the scripts.

Example:
```
./1_run-test.sh test-function
```