# s3-archiver-service

## Introduction

This is a sample AWS serverless app to demonstrate archiving of files in S3 bucket, and saving back the output archive file in S3.

## Description

This demo App contains a sample Cloudformation to provision a Lambda and an SNS topic. Also, need a S3 bucket for demo only.

The Lambda in this project used the **[lambda-s3-archiver](https://www.npmjs.com/package/lambda-s3-archiver)** npm module to read and archive files in AWS S3 bucket using stream, and store the archive file back to S3 using stream.

The SNS is useful to decouple the service lambda. Other service (i.e., lambda) can call the s3-archiver-service-lambda, which is responsible in archiving the files,  by publishing message into the SNS.

The S3 is used for demo only to store the sample source files and to ouput the archive file.

## How to run this sample App?

Below are the steps to how to provision new stack and testing the sample App.

#### Provision new stack

1. Create a S3 bucket (or you can use existing bucket) to store the sample Cloudformation template and the zip file needed to provision new stack.

   - Copy the files in /cloudformation folder (cfn-template-s3-archiver.json and lambda-s3-archiver.zip) into this bucket

2. Create new Cloudformation stack by specifying the S3 template URL in step #1. Provide required parameters.

#### Test sample App

3. Go to SNS -> Topics and look for **"${stack-name}-archiver-s3-archiver-service-topic"**

   - Test by publishing message to topic, sample message below. Then click on "Publish message".

```json
Subject: Test
Message Format: Raw

Message:
{
    "sourceBucket": "s3-bucket-name",
    "sourcePath": "s3-prefix-path",
    "sourceFiles": "",
    "outputFilename": "outputFile",
    "outputFormat": "zip"
}
````

4. To verify, go to s3-bucket-name/s3-prefix-path and check the output archive file.

## What's next?

With this demo App, you may now have an idea on how to integrate the S3 Archiver service in your new or existing application through publishing message to the SNS topic.

Cheers and happy coding!
