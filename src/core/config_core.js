'use strict';

/**
 * @param {string} name - input name
 * @param {object} [attributes] - single input structure
 * @return {object|null}
 */
function configCore(name, attributes) {
  if (isPrimitive(attributes)) return null;
  if (!name) return null;

  const defaultValues = {
    label: {
      text: undefined,
      class: undefined,
      id: undefined,
      for: 'id_' + name,
      wrap: false,
    },
    for: 'id_' + name,
    class: undefined,
    id: 'id_' + name,
    name: name,
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
    multiple: true,
  };

  return Object.assign(attributes, defaultValues);
};


function isPrimitive(value) {
  return value === null || typeof value !== 'object';
}

module.exports = configCore;
