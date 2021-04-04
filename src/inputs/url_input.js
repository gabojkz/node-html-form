const AttributeBuilder = require('../core/attr_builder');
const TextInput = require('./text_input');

/**
 * @typedef Structure
 * @property {string} [id]
 * @property {[]} [class]
 * @property {string} [value]
 * @property {string} [name]
 * @property {string} [placeholder]
 * @property {boolean} [required]
 * @property {number} [maxlength]
 * @property {number} [minlength]
 * @property {object} [pattern]
 * @property {object} [spellcheck]
 * @property {boolean} [readonly]
 * @property {number} [size]
 * @property {boolean} [disabled]
 */

/**
 * html input type text
 */
class UrlInput extends TextInput {
  /**
   * @param {string} name
   * @param {Structure} structure
   */
  constructor(name, structure) {
    super(name, structure);
  }

  /**
   * @return {string}
   */
  get tag() {
    const attr = new AttributeBuilder(Object.create(this));
    return `<input type="url" ${attr.toString()}>`;
  }
}

module.exports = UrlInput;
