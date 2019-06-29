"use strict";

module.exports = {
    name: "myPluginName",
    plugin: require('./src/plugin/plugin.js'),
    assertions: require('./src/assertions/assertions.js')
};
