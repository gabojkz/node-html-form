const Input = require('./Input')
const validator = require('../Validations')
const locale = require('../../config/locale')
const {generateMassage} = require('../Utils');
const {FormValidationError} = require('../Exceptions');

function InputText(value, validations, htmlAttributes) {
  Input.call(this, ...arguments)
}

InputText.prototype = new Input();
InputText.prototype.constructor = InputText;

InputText.prototype.build = function() {
  var input = '<input type="text" ';

  input += this.stringifyAttributes();

  // close tag
  input += '/>';

  return input;
}

module.exports = InputText;
