'use strict';

const validation = require('../Validations')
const FormValidationError = require('../Exceptions')
const utils = require('../Utils')
const {getErrorMessage} = require('../Utils')

const Input = function (value, validations, htmlAttributes) {
  this.name = null
  this.value = value
  this.validations = {
    required: true,
    ...validations
  }
  this.htmlAttributes = htmlAttributes
  this.errors = []
}

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
  if (attrName in this.attrs) return null;
  console.log(this.attrs)

  this.attrs[attrName] = attrValue;

  return this.attrs;
}

Input.prototype.stringifyAttributes = function (input) {
  var self = this;

  return Object.keys(this.attrs).map(function (attrName) {
    if (self.booleanAttributes.indexOf(attrName) >= 0) {
      return attrName;
    } else {
      // TODO: needs to scape characters like I'am
      return attrName + '=' + `"${self.attrs[attrName]}"`;
    }
  }).join(' ')
}

Input.prototype.render = function () {
  return this.build();
}

Input.prototype.setValue = function(value)
{
  this.value = value

  return this.value
}

module.exports = Input;