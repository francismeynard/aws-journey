# Welcome to my AWS Journey !

In this repo, you will find some useful sample AWS applications,as well as Serverless services, that demonstrates features available in using AWS platform. 

There are also some libraries, such as npm modules, that will help you solve common problems in some of the AWS services, such as in Lambda, API Gateway, and others.

## AWS Serverless Sample App

### [sample-s3-archiver-service](https://github.com/francismeynard/aws-journey/tree/master/sample-s3-archiver-service)

This is a sample AWS serverless app to demonstrate archiving of files in S3 bucket, and saving back the output archive file in S3.

### [sample-s3-document-upload-service](https://github.com/francismeynard/aws-journey/tree/master/sample-s3-document-upload-service)

This is a sample AWS serverless app to demonstrate uploading of multipart form data via API gateway to Lambda function. It works very well uploading **binary** and text files.

### [sample-lambda-execute-pg-sql-file-from-s3](https://github.com/francismeynard/aws-journey/tree/master/sample-lambda-execute-pg-sql-file-from-s3)

This is a sample Lambda function that reads SQL file in S3 and executes it. The SQL file doesn't have to be single line statement, it can also reads and executes multiple SQL statements separated by semicolon. Essentially, this can be used to run initialize DB tables scripts or executing seed data.

## NPM Modules for AWS Lambda (nodejs)

### [lambda-s3-archiver](https://github.com/francismeynard/lambda-s3-archiver)

This nodejs module will read and archive files in AWS S3 bucket using **stream**, and store the archive file in S3 as well. It works very well archiving any files in S3 bucket. Since it is using **stream** in both reading the source files and writing the archive file, it can safely process large files without too much memory needed in the lambda.

Check this out! <https://www.npmjs.com/package/lambda-s3-archiver>

### [lambda-s3-mv](https://github.com/francismeynard/lambda-s3-mv)

This nodejs module will move S3 files to another S3 location. The AWS S3 sdk doesn't come out with a built-in move files operation. This module will handle that for you using the available built-in operations, such copyObject (and deleteObjects if "createCopy" set to false).

Check this out! <https://www.npmjs.com/package/lambda-s3-mv>

### [lambda-multipart-parser](https://github.com/francismeynard/lambda-multipart-parser)

This nodejs module will parse the multipart-form containing files and fields from the AWS lambda event object. It works very well parsing **binary** and text files.

Check this out! <https://www.npmjs.com/package/lambda-multipart-parser>

### [cfn-custom-resource-response](https://github.com/francismeynard/aws-journey/tree/master/cfn-custom-resource-response)

This is a NPM-hosted of AWS cfn-response for Custom Resources. This module contains a send method that respond on behalf of custom resources you create using AWS CloudFormation by way of an Amazon S3 presigned URL (the ResponseURL).

Check this out! <https://www.npmjs.com/package/cfn-custom-resource-response>

## Miscellaneous

### [sample-lambda-devops-scripts](https://github.com/francismeynard/aws-journey/tree/master/sample-lambda-devops-scripts)

This project contains sample scripts on how to run unit test, create lambda zip file, and deploy zip to AWS using AWS CLI.

### [sample-lambda-nodejs-unit-test](https://github.com/francismeynard/aws-journey/tree/master/sample-lambda-nodejs-unit-test)

This is a sample project on how to perform unit test for AWS lambda using nodejs.
