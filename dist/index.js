(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // const { reconstruct, init } = require("./utils");
    var _a = require('./utils'), reconstruct = _a.reconstruct, init = _a.init;
    var style;
    // { log: string, warn: string, info: string,error: string}
    function styled(previousStyle) {
        if (previousStyle) {
            return function (strings) {
                var values = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    values[_i - 1] = arguments[_i];
                }
                return init(previousStyle.methodName, previousStyle.style + " " + reconstruct(strings, values));
            };
        }
    }
    styled.log = function (strings) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return init('log', "" + reconstruct(strings, values));
    };
    styled.info = function (strings) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return init('log', "" + reconstruct(strings, values));
    };
    styled.warn = function (strings) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return init('log', "" + reconstruct(strings, values));
    };
    styled.error = function (strings) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return init('log', "" + reconstruct(strings, values));
    };
    exports.default = styled;
});
