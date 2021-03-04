const TextInput = require('./inputs/text_input');
const PasswordInput = require('./inputs/password_input');
const CheckboxInput = require('./inputs/checkbox_input');
const RadioInput = require('./inputs/radio_input');
const SelectInput = require('./inputs/select_input');
const TextareaInput = require('./inputs/textarea_input');
const FileInput = require('./inputs/file_input');

/** @type {Object.<string, object>} */
const inputsMap = {
  'text': TextInput,
  'password': PasswordInput,
  'checkbox': CheckboxInput,
  'radio': RadioInput,
  'select': SelectInput,
  'textarea': TextareaInput,
  'file': FileInput,
};

/**
 * @param {string} name
 * @param {Structure} structure - structure of one input
 * @return {unknown} - input element
 */
function factoryInput(name, structure) {
  /** @type any */
  const InputElement = inputsMap[structure.type];
  if (!InputElement) {
    throw new TypeError('HTML input is missing type attribute');
  }

  return new InputElement(name, structure);
}

module.exports = factoryInput;

/**
  * @typedef Structure
  * @property {string} type
  * @property {unknown} value
  */

