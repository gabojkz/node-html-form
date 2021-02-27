const Input = require('../inputs/Input');

function CheckboxInput() {
  Input.call(this, ...arguments);
}

/**
 * Extends Input.
 */
CheckboxInput.prototype = Object.create(Input.prototype);
CheckboxInput.prototype.constructor = CheckboxInput;


CheckboxInput.prototype.build = function() {
  let input = '<input type="checkbox"';

  input += this.id ? ` id="${this.id}"` : '';

  input += this.name ? ` name="${this.name}"` : '';

  input += this.value ? ` value="${this.value}"` : '';

  input += this.checked ? ` checked` : '';

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

CheckboxInput.prototype.setChecked = function(checked) {
  return this.checked = Boolean(checked);
};

CheckboxInput.prototype.isChecked = function() {
  return this.checked;
};

module.exports = CheckboxInput;
