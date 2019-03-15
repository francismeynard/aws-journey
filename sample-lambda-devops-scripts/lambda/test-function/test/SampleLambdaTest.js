'use strict';

const sinon = require('sinon');
const { assert } = require('chai');

const testLambda = require('../index.js');

describe('SampleLambda', () => {

    describe('#handler()', () => {

        beforeEach(() => {});

        afterEach(() => {});

        it('should return test message', () => {
            // GIVEN
            const callback = sinon.fake();
            const event = { message: "test message" };

            // WHEN
            testLambda.handler(event, {}, callback);

            // THEN
            assert.equal(callback.callCount, 1);
            assert.isNull(callback.lastCall.args[0]);
            assert.equal(callback.lastCall.args[1].message, event.message);
        });

    });

});