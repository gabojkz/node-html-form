'use strict';

const parser = require('./parser');
const elementFactory = require('./element_factory');

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
 * @typedef {object} BuildingOptions
 * @property {boolean} autoId
 */
class FormEngine {
  /**
   * @param {FormStructure} rawStructure
   * @param {object} data
   */
  constructor(rawStructure, data) {
    this.data = data;
    this.input = {};
    for (const name in rawStructure) {
      if ({}.hasOwnProperty.call(rawStructure, name)) {
        const structure = parser(name, rawStructure[name]);
        const element = elementFactory(name, structure);
        Object.defineProperty(
            this.input,
            name,
            {
              value: element.input,
              enumerable: true,
            }
        );
      }
    }
  }

  /***/
  updateInputs() {
    const data = Array.isArray(this.data) ? this.data[0] : {};
    for (const [key, value] of Object.entries(data)) {
      if ({}.hasOwnProperty.call(data, key)) {
        // this.input[key].setValue( value );
      }
    }
  }

  /**
   * @return {string}
   */
  buildAsP() {
    const buildSteps = Object.keys(this.input).map( (name) => {
      return '<p>' + this.input[name].tag + '</p>';
    });

    return buildSteps.join('');
  }

  /**
   * @return {string}
   */
  build() {
    const buildSteps = Object.keys(this.input).map( (name) => {
      return this.input[name].tag;
    });

    return buildSteps.join('');
  }
}

module.exports = FormEngine;
