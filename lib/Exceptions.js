'use strict';
const {findMessage} = require('./Utils')

function FormValidationError(message, inputName, inputValue, requirement) {
  // Error.captureStackTrace(this, FormValidationError);
  this.name = 'FormValidationError'
  this.message = message
  this.inputName = inputName
  this.inputValue = inputValue
  this.requirement = requirement
}

FormValidationError.prototype.constructor = FormValidationError;
FormValidationError.prototype = Object.create(Error.prototype);

FormValidationError.prototype.asJSON = function() {
  const messsage = this.asMessage()

  return JSON.stringify({ messsage })
}

FormValidationError.prototype.asMessage = function() {
  const message = findMessage(this.message, this.inputName, this.inputValue, this.requirement)
  return message
}

/**
 * Class: FormError 
 * 
 * Custom error class use this in the form to throw errors for custom 
 * validation checks
 * 
 * @param {*} label 
 * @param {*} value 
 * @param {*} message 
 */
function FormError(message) {
  Error.captureStackTrace(this, FormError);
  this.name = 'FormError'
  this.validationType = 'check'
  this.message = message
}

FormError.prototype.constructor = FormError;
FormError.prototype = FormValidationError.prototype;


module.exports = {FormValidationError, FormError};