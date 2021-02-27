'use strict';

const Label = require('./label');
const TextInput = require('./inputs/text_input');
const buildInput = require('./input');


/**
 * @typedef {object} FormStructure
 * @type {Object.<[key: string], InputNode>}
 */

/**
 * @typedef {object} InputNode
 * @property {string} type
 * @property {[]} classes - array of classes
 */

/**
 * Main class
 */
class NodeForm {
  /**
   * @param {FormStructure} formStructure
   */
  constructor(formStructure) {
    // this.formStructure = formStructure;
    for (const name in formStructure) {
      if ({}.hasOwnProperty.call(formStructure, name)) {
        Object.defineProperty(
            this,
            `${name}`,
            {
              value: new Label(
                  buildInput(formStructure, name),
                  formStructure[name]
              ),
              enumerable: true,
            }
        );
      }
    }
  }
}

module.exports = NodeForm;


// name.label.input
// name.input
