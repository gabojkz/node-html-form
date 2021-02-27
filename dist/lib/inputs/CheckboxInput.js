"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Input = require('../inputs/Input');
function CheckboxInput() {
    Input.call.apply(Input, __spreadArrays([this], arguments));
}
/**
 * Extends Input.
 */
CheckboxInput.prototype = Object.create(Input.prototype);
CheckboxInput.prototype.constructor = CheckboxInput;
CheckboxInput.prototype.build = function () {
    var input = '<input type="checkbox"';
    input += this.id ? " id=\"" + this.id + "\"" : '';
    input += this.name ? " name=\"" + this.name + "\"" : '';
    input += this.value ? " value=\"" + this.value + "\"" : '';
    input += this.checked ? " checked" : '';
    // close input
    input += '></input>';
    return input;
};
/**
 * Option variable
 *
 * Specifies if checkbox input is checked. Default is false.
 */
CheckboxInput.prototype.checked = false;
CheckboxInput.prototype.setChecked = function (checked) {
    return this.checked = Boolean(checked);
};
CheckboxInput.prototype.isChecked = function () {
    return this.checked;
};
module.exports = CheckboxInput;
