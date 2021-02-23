'use strict';
const Input = require('../inputs/Input')
const validation = require('../Validations')
const { getErrorMessage } = require('../Utils')

function PasswordInput() {
  Input.call(this, ...arguments)
  this.validations = { 
    ...this.validations,
    password: true
  }
}

PasswordInput.prototype = new Input();
PasswordInput.prototype.constructor = PasswordInput;

module.exports = PasswordInput