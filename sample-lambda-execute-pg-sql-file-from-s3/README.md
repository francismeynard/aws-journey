# sample-lambda-execute-pg-sql-file-from-s3

## Introduction

This is a sample Lambda function that reads the postgres SQL file in S3 and executes it.

## Description

This lambda executes SQL statements in S3 file and intended only for Postgres database. It's currently using the "pg" nodejs module.

The SQL file doesn't have to be single line statement, it can also reads and executes multiple SQL statements separated by semicolon. Essentially, this can be used to run initialize DB tables scripts or executing seed data.

Since it is using the "pg" module, the database details are needed to initialize the Client. The lambda expects the following 5 **environment variables** to be defined.

Environment Variable Name | Example Value
--- | --- | ---
PGHOST | test-db-instance.abcde1234.ap-southeast-2.rds.amazonaws.com
PGPORT | 5432
PGUSER | your-user
PGPASSWORD | your-password
PGDATABASE | your-database-name

## Test the lambda function?

For testing, open the Lambda function and create Test Event, sample event parameters below.

```json
{
  "S3Bucket": "s3-bucket-name",
  "s3ObjectKey": "s3-prefix-path/test-query.sql"
}
```
