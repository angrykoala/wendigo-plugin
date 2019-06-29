"use strict";

const {AssertionError} = require('wendigo').Errors;

module.exports = class VueAssertions {
    constructor(browser, pluginInstance, assertionsInstance) {
        this._browser = browser;
        this._assertions = assertionsInstance;
        this._plugin = pluginInstance;
    }

    myAssertion() {
        try {
            this._assertions();
            throw new AssertionError("assert.myPluginName.not.myAssertion", "Assertion didn't throw.");
        } catch (err) {
            if (!(err instanceof AssertionError)) throw err;
            // if err is an assertion error, negation should not throw
        }
    }
};
