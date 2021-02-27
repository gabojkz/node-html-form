"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Input = require('./Input');
var validator = require('../Validations');
var locale = require('../../config/locale');
var generateMassage = require('../Utils').generateMassage;
var FormValidationError = require('../Exceptions').FormValidationError;
function InputText(value, validations, htmlAttributes) {
    Input.call.apply(Input, __spreadArrays([this], arguments));
}
InputText.prototype = new Input();
InputText.prototype.constructor = InputText;
InputText.prototype.build = function () {
    var input = '<input type="text" ';
    input += this.stringifyAttributes();
    // close tag
    input += '/>';
    return input;
};
module.exports = InputText;
