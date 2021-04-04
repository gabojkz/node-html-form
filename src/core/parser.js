'use strict';

/**
 * Module dependencies.
 * @private
 */

/**
 * Parser
 * @param {string} inputName
 * @param  {object} rawInputStruct
 * @return {Object}
 */
function parser(inputName, rawInputStruct) {
  const DEFAULTS = {
    label: {
      text: inputName,
      class: undefined,
      id: undefined,
      for: 'id_' + inputName,
      wrap: false,
      show: true,
    },
    type: 'text', // default type
    for: 'id_' + inputName,
    class: undefined,
    id: 'id_' + inputName,
    name: inputName,
    maxlength: undefined,
    minlength: undefined,
    pattern: undefined,
    placeholder: undefined,
    spellcheck: undefined,
    readonly: undefined,
    size: undefined,
    required: true,
    disabled: false,
    rows: 2,
    cols: 20,
    checked: false,
    value: undefined,
    selected: false,
    indeterminate: false,
    accept: undefined,
    capture: false,
    multiple: undefined,
  };

  return Object.assign({}, DEFAULTS, rawInputStruct);
}

module.exports = parser;
