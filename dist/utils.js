"use strict";
// * This function is responsible for reconstructing taggedtemplate literal arguments.
function reconstruct(strings, values) {
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
    if (!Array.isArray(strings))
        return strings;
    var messageArray = [];
    strings.forEach(function (str, i) {
        if (str)
            messageArray.push(str);
        if (values && values[i])
            messageArray.push(typeof values[i] === "function" ? values[i]() : values[i]);
        return false;
    });
    return messageArray.join(" ");
}
function init(methodName, style) {
    function executionFunction(strings) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        var text = reconstruct(strings, values);
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
module.exports = {
    reconstruct: reconstruct, init: init
};
