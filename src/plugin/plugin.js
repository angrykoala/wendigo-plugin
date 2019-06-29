"use strict";

module.exports = class VuePlugin {
    constructor(browser) {
        this._browser = browser;
    }

    myMethod() {
        return false;
    }

    _afterOpen() {
        // After page open hook
    }
};
