# Welcome to my AWS Journey !

In this repo, you will find some useful sample AWS related applications, such as services used in Serverless architecture, to demonstrate features of AWS services and some libraries that will help you solve common problems in some of these AWS services, such as in Lambda, API Gateway, and others.

## [s3-archiver-service](https://github.com/francismeynard/aws-journey/tree/master/s3-archiver-service)

This is a sample AWS serverless app to demonstrate archiving of files in S3 bucket, and saving back the output archived file in S3.

## [s3-document-upload-service](https://github.com/francismeynard/aws-journey/tree/master/s3-document-upload-service)

This is a sample AWS serverless app to demonstrate uploading of multipart form data via API gateway to Lambda function. It works very well uploading **binary** and text files.

## [lambda-s3-archiver](https://github.com/francismeynard/lambda-s3-archiver)

This nodejs module will read and archive files in AWS S3 bucket using **stream**, and store the archive file in S3 as well. It works very well archiving any files in S3 bucket. Since it is using **stream** in both reading the source files and writing the archive file, it can safely process large files without too much memory needed in the lambda.

## [lambda-multipart-parser](https://github.com/francismeynard/lambda-multipart-parser)

This nodejs module will parse the multipart-form containing files and fields from the AWS lambda event object. It works very well parsing **binary** and text files.

## [cfn-custom-resource-response](https://github.com/francismeynard/aws-journey/tree/master/cfn-custom-resource-response)

This is a NPM-hosted of AWS cfn-response for Custom Resources.

## [aws-lambda-nodejs-unit-test](https://github.com/francismeynard/aws-lambda-nodejs-unit-test)

This is a sample project on how to perform unit test for AWS lambda using nodejs.

## [aws-lambda-devops](https://github.com/francismeynard/aws-lambda-devops)

This project contains sample scripts on how to package and deploy AWS Lambda using AWS CLI.
