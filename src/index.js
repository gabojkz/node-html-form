'use strict';

const Label = require('./label');
const buildInput = require('./input_factory');


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
    /** @type {Object.<string, object>} */
    this.input = {};
    /** @type {Object.<string, object>} */
    this.label = {};
    // this.formStructure = formStructure;
    for (const name in formStructure) {
      if ({}.hasOwnProperty.call(formStructure, name)) {
        Object.defineProperty(
            this.input,
            name,
            {
              value: buildInput(formStructure[name]),
              enumerable: true,
            }
        );
        Object.defineProperty(
            this.label,
            name,
            {
              value: new Label(
                  this.input[name],
                  formStructure[name]
              ),
              enumerable: true,
            }
        );
      }
    }
  }

  /**
   * @param {string} elementName
   * @return {string}
   */
  buildElement(elementName) {
    if (!{}.hasOwnProperty.call(this.label, elementName)) {
      throw new TypeError('no element found with name' + ` '${elementName}'`);
    }

    return this.label[elementName].build();
  }
}

module.exports = NodeForm;
