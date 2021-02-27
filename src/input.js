const TextInput = require('./inputs/text_input');

/** @type {Object.<string, TextInput>} */
const inputsMap = {
  // @ts-ignore
  'text': TextInput,
};
/**
 * @param {Structure} structure
 * @param {string} inputName
 * @return {unknown} - input element instance
 */
function buildInput(structure, inputName) {
  const inputStructure = structure[inputName];
  if (!inputStructure && typeof inputStructure !== 'object') {
    throw new Error(`invalid form structure input ${inputName}`);
  }

  // console.log(inputStructure);
  /** @type any */
  const InputType = inputsMap[inputStructure.type];

  return new InputType(inputName, inputStructure.value, inputStructure);
}

module.exports = buildInput;

/**
 * @typedef Structure
 * @type Object.<string, InputNode>
 */

/**
  * @typedef InputNode
  * @property {string} type
  * @property {unknown} value
  */

