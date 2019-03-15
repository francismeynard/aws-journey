"use strict";

/*
 * The lambda function main entry point
 */
exports.handler = (event, context, callback) => {
    console.debug(JSON.stringify(event));
    context.callbackWaitsForEmptyEventLoop = false;

    callback(null, event);
};