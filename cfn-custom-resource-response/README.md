# cfn-custom-resource-response

```bash
npm install cfn-custom-resource-response --save
```

## Introduction

This is a NPM-hosted of AWS cfn-response for Custom Resources.

## Description

This module contains a send method that respond on behalf of custom resources you create using AWS CloudFormation by way of an Amazon S3 presigned URL (the ResponseURL).

For more information about AWS cfn-response, click [here](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-cfnresponsemodule).

## Usage

```nodejs
const response  = require('cfn-custom-resource-response');

response.send(event, context, response.SUCCESS, { "message": "Success" });
```

After executing the send method, the Lambda function terminates, so anything you write after that method is ignored.

Sample Lambda with Cloudformation can be found in [here](https://github.com/francismeynard/aws-journey/tree/master/cfn-template-cognito-app-client).
