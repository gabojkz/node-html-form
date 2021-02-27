'use strict';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var validation = require('../Validations');
var FormValidationError = require('../Exceptions');
var utils = require('../Utils');
var getErrorMessage = require('../Utils').getErrorMessage;
var Input = function (value, validations, htmlAttributes) {
    this.name = null;
    this.value = value;
    this.validations = __assign({ required: true }, validations);
    this.htmlAttributes = htmlAttributes;
    this.errors = [];
};
/**
 * Property: booleanAttributes
 *
 * Returns a list of all HTML attibutes type boolean the presence of any of this
 * properties represents `true` and the absence `false`.
 */
Input.prototype.booleanAttributes = [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
    "truespeed",
];
Input.prototype.setAttribute = function (attrName, attrValue) {
    if (attrName in this.attrs)
        return null;
    console.log(this.attrs);
    this.attrs[attrName] = attrValue;
    return this.attrs;
};
Input.prototype.stringifyAttributes = function (input) {
    var self = this;
    return Object.keys(this.attrs).map(function (attrName) {
        if (self.booleanAttributes.indexOf(attrName) >= 0) {
            return attrName;
        }
        else {
            // TODO: needs to scape characters like I'am
            return attrName + '=' + ("\"" + self.attrs[attrName] + "\"");
        }
    }).join(' ');
};
Input.prototype.render = function () {
    return this.build();
};
Input.prototype.setValue = function (value) {
    this.value = value;
    return this.value;
};
module.exports = Input;
