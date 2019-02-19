# s3-archiver-service

## Introduction
This is a sample AWS serverless app to demonstrate archiving of files in S3 bucket, and saving back the output archived file in S3.

This app contains a sample Cloudformation to provision a Lambda, an SNS and S3 bucket (for demo only). 

The SNS is useful to decouple the service lambda. Eventually, other lambda can call the s3-archiver-service-lambda, which is responsible in archiving the files, via SNS.

The lambda in this project used the **[lambda-s3-archiver](https://www.npmjs.com/package/lambda-s3-archiver)** npm module to read and archive files in AWS S3 bucket using stream, and store the archive file back in S3 using stream.
