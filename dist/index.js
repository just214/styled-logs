"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reconstruct(literals, placeholders) {
    /*
     * strings could be
     * 1. an array of strings
     * 2. a string
     *
     * values could be
     * - undefined
     * - an array of strings
     * - an array of functions (that return a string)
     * - an array of both strings and functions
     */
    // * If strings is of type string, values should be undefined.
    if (!Array.isArray(literals))
        return literals;
    var result = [];
    literals.forEach(function (str, i) {
        if (str)
            result.push(str);
        if (placeholders && placeholders[i])
            result.push(typeof placeholders[i] === "function" ? placeholders[i]() : placeholders[i]);
        return false;
    });
    return result.join(" ");
}
exports.reconstruct = reconstruct;
function init(methodName, style) {
    function executionFunction(literals) {
        var placeholders = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            placeholders[_i - 1] = arguments[_i];
        }
        var text = reconstruct(literals, placeholders);
        console = console || window.console;
        switch (methodName) {
            case 'log':
                return console.log("%c%s", style, text);
            case 'info':
                return console.info("%c%s", style, text);
            case 'warn':
                return console.warn("%c%s", style, text);
            case 'error':
                return console.error("%c%s", style, text);
            default:
                return console.log("%c%s", style, text);
        }
    }
    executionFunction.style = style;
    executionFunction.methodName = methodName;
    return executionFunction;
}
exports.init = init;
function styled(previousStyle) {
    if (previousStyle) {
        return function (literals) {
            var placeholders = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                placeholders[_i - 1] = arguments[_i];
            }
            return init(previousStyle.methodName, previousStyle.style + " " + reconstruct(literals, placeholders));
        };
    }
    return false;
}
styled.log = function (literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    return init('log', "" + reconstruct(literals, placeholders));
};
styled.warn = function (literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    return init('log', "" + reconstruct(literals, placeholders));
};
styled.error = function (literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    return init('log', "" + reconstruct(literals, placeholders));
};
exports.default = styled;
