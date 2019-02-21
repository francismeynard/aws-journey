"use strict";

const s3Archiver = require('lambda-s3-archiver');

/*
 * The lambda function main entry point
 */
exports.handler = async (event, context, callback) => {
    console.debug(JSON.stringify(event));
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        for (let record of event.Records) {
            await new SnsMessage(record.Sns.Message).process();
        }

        console.log('Done processing S3 archiving service request.');
        callback(null, { message: "Completed" });

    } catch (error) {
        console.error(error);
        callback(null);
    }
};

/*
 * @class SnsMessage
 */
class SnsMessage {

    constructor(message) {
        this.message = JSON.parse(message);
    }

    async process() {
        console.log(`Processing message - ${JSON.stringify(this.message)}`);

        const sourceBucket = this.message.sourceBucket;
        const sourcePath = this.message.sourcePath;
        const sourceFiles = (this.message.sourceFiles || "").split(",").filter(f => f);
        const outputFilename = this.message.outputFilename || 'outputFile';
        const outputFormat = this.message.outputFormat || 'zip';

        const result = await s3Archiver.archive(sourceBucket, sourcePath, sourceFiles, outputFilename, outputFormat);
        console.log(result);
    }

}