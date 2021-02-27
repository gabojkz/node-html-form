"use strict";
var TextInput = require('./inputs/text_input');
/** @type {Object.<string, TextInput>} */
var inputsMap = {
    // @ts-ignore
    'text': TextInput,
};
/**
 * @param {Structure} structure
 * @param {string} inputName
 * @return {unknown} - input element instance
 */
function buildInput(structure, inputName) {
    var inputStructure = structure[inputName];
    /** @type any */
    var InputType = inputsMap[inputStructure.type];
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
