const TextInput = require('./inputs/text_input');

/** @type {Object.<string, TextInput>} */
const inputsMap = {
  // @ts-ignore
  'text': TextInput,
};
/**
 * @param {Structure} structure - structure of one input
 * @return {unknown} - input element instance
 */
function buildInput(structure) {
  /** @type any */
  const InputType = inputsMap[structure.type];
  if (!InputType) throw new TypeError('HTML input is missing type attribute');

  return new InputType(structure);
}

module.exports = buildInput;

/**
  * @typedef Structure
  * @property {string} type
  * @property {unknown} value
  */

