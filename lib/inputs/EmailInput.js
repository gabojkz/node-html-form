const Input = require('./Input');
const validation = require('../Validations');
const FormValidationError = require('../Exceptions');
const { getErrorMessage } = require('../Utils');


function EmailInput(value, options, htmlAttributes) {
  Input.call(this, ...arguments)
  this.validations = { 
    ...this.validations,
    email: true,
  }
}

// Extends
EmailInput.prototype = new Input();
EmailInput.prototype.constructor = EmailInput;

module.exports = EmailInput;
