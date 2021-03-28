'use strict';

const Label = require('../inputs/label');
const TextInput = require('../inputs/text_input');
const PasswordInput = require('../inputs/password_input');
const CheckboxInput = require('../inputs/checkbox_input');
const RadioInput = require('../inputs/radio_input');
const SelectInput = require('../inputs/select_input');
const TextareaInput = require('../inputs/textarea_input');
const FileInput = require('../inputs/file_input');
const EmailInput = require('../inputs/email_input');
const PhoneInput = require('../inputs/phone_input');
const RangeInput = require('../inputs/range_input');
const UrlInput = require('../inputs/url_input');
const NumberInput = require('../inputs/number_input');

/** @type {Object.<string, object>} */
const INPUTS = {
  'text': TextInput,
  'password': PasswordInput,
  'checkbox': CheckboxInput,
  'radio': RadioInput,
  'select': SelectInput,
  'textarea': TextareaInput,
  'file': FileInput,
  'email': EmailInput,
  'phone': PhoneInput,
  'range': RangeInput,
  'url': UrlInput,
  'number': NumberInput,
};

/**
  * @typedef Structure
  * @property {string} type
  * @property {unknown} value
  */

/**
 * @typedef Element
 * @property {Object} input
 * @property {Object} label
 */

/**
 * @param {string} name
 * @param {Structure} structure - structure of one input
 * @return {Element} - input element
 */
function elementFactory(name, structure) {
  /** @type any */
  const Input = INPUTS[structure.type];
  if (!Input) {
    throw new TypeError('cannot find input of type=' + structure.type);
  }
  const input = new Input(name, structure);
  const label = new Label(name, input, structure);
  return {input, label};
}

module.exports = elementFactory;


