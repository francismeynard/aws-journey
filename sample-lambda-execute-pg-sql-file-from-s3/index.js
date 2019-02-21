"use strict";

const aws = require('aws-sdk');
const { Client } = require('pg');

const s3 = new aws.S3();

/*
 * The lambda function main entry point
 */
exports.handler = async (event, context, callback) => {
    console.debug(JSON.stringify(event));
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        const pgClient = new Client();
        await pgClient.connect();

        try {
            await pgClient.query('BEGIN');

            console.log(`Reading SQL file in ${event.S3Bucket}/${event.s3ObjectKey}`);

            let sqlFile = await s3.getObject({ Bucket: event.S3Bucket, Key: event.s3ObjectKey }).promise();
            let result = await pgClient.query(sqlFile.Body.toString() || "");
            console.log(result);

            console.log(`Successfully executed SQL file!`);

            await pgClient.query('COMMIT');
        } catch (error) {
            await pgClient.query('ROLLBACK');
            throw error;
        } finally {
            await pgClient.end();
        }

        callback(null, { message: "Completed" });

    } catch (error) {
        console.error(error);
        callback(error);
    }
};