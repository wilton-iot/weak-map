define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

var Suite = require("jasminum");
var WeakMap = require("weak-map/weak-map");

var name = WeakMap === global.WeakMap ? "native WeakMap" : "shim WeakMap";
var suite = new Suite(name).describe(function () {
    require("weak-map/weak-map-test.js");
});

suite.runAndReport().done();


return module.exports;});
