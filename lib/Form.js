'use strict';

const formValidation = require('../lib/FormValidation')

const Input = require('./inputs/Input')
const TextInput = require('./inputs/TextInput')
const EmailInput = require('./inputs/EmailInput')
const CheckboxInput = require('./inputs/CheckboxInput')
const PasswordInput = require('./inputs/PasswordInput')
const utils = require('./Utils')

/**
 * Class: BaseForm
 * 
 * BaseForm works allowing you to create your own custom html forms programmatically
 * by inherit from this class it also validates the data submited and returns 
 * and array of errors
 */
function BaseForm() 
{
}

BaseForm.prototype.inputField = function(value, validations={}, htmlAttributes={})
{
  return new TextInput(value, validations, htmlAttributes)
}

BaseForm.prototype.emailField = function(value, validations={}, htmlAttributes={})
{
  return new EmailInput(value, validations, htmlAttributes)
}

BaseForm.prototype.passwordField = function(value, validations={}, htmlAttributes={})
{
  return new PasswordInput(value, validations, htmlAttributes)
}

BaseForm.prototype.checkboxField = function(value, validations={}, htmlAttributes={})
{
  return new CheckboxInput(value, validations, htmlAttributes)
}

/**
 * Async Property: errors
 * 
 * Compare each rule with the data provided
 */
BaseForm.prototype.errors = async function() {
  
  const formErrors = await formValidation.startChecking(this)

  return formErrors.map(error => { 
    return error.asMessage() 
  })
}

module.exports = BaseForm;
