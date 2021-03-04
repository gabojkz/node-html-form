'use strict';

const Label = require('./label');
const factoryInput = require('./input_factory');

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
        const plainInput = formStructure[name];

        const defaultValues = {
          label: {
            text: undefined,
            class: undefined,
            id: undefined,
            for: 'id_' + name,
            wrap: false
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
          multiple: true
        };

        const structure = {
          ...formStructure[name],
          ...defaultValues
        };

        console.log(structure)

        Object.defineProperty(
            this.input,
            name,
            {
              value: factoryInput(name, structure),
              enumerable: true,
            }
        );
        Object.defineProperty(
            this.label,
            name,
            {
              value: new Label(
                  name,
                  this.input[name],
                  structure
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
    if (!Object.hasOwnProperty.call(this.label, elementName)) {
      throw new TypeError('no element found with name' + ` '${elementName}'`);
    }

    return this.label[elementName].build();
  }

  /**
   * @param {BuildingOptions} options
   * @return {string}
   */
  build(options) {
    return Object.keys(this.label)
        .map( (labelName) => this.buildElement(labelName)).join('');
  }

  /**
   * @return {string}
   */
  buildAsP() {
    return Object.keys(this.label)
        .map( (labelName) =>
          '<p>' + this.buildElement(labelName) + '</p>'
        ).join('');
  }
}

module.exports = NodeForm;
