"use strict";

const {AssertionError} = require('wendigo').Errors;
const NotAssertions = require('./not_assertions');

module.exports = class PluginAssertions {
    constructor(browser, pluginInstance) {
        this._browser = browser;
        this._plugin = pluginInstance;
        this._notAssertions = new NotAssertions(browser, pluginInstance, this);
    }

    get not() {
        return this._notAssertions;
    }

    myAssertion() {
        if (!this._plugin.myMethod())
            throw new AssertionError("assert.myPluginName.myAssertion", "Assertion thrown.");
    }
};
