"use strict";

const s3Archiver = require('lambda-s3-archiver');

/*
 * The lambda function main entry point
 */
exports.handler = async (event, context, callback) => {
    console.debug(JSON.stringify(event.requestContext));
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        const sourceBucket = event.sourceBucket;
        const sourcePath = event.sourcePath;
        const sourceFiles = (event.sourceFiles || "").split(",").filter(f => f);
        const outputFilename = event.outputFilename || 'outputFile';
        const outputFormat = event.outputFormat || 'zip';

        const result = await s3Archiver.archive(sourceBucket, sourcePath, sourceFiles, outputFilename, outputFormat);
        console.log(result);

        callback(null, { statusCode: 200, body: JSON.stringify({ "message": "Success" }) });

    } catch (error) {
        console.error(error);
        callback(null, { statusCode: 503, body: JSON.stringify({ message: "Service Unavailable" }) });
    }
};