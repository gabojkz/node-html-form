const AttributeBuilder = require('../core/attr_builder');
const InputText = require('./text_input');

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
 * html input type tel
 * @example
 *    <input type="tel" id="id_phone" name="phone" required>
 */
class PhoneInput extends InputText {
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
    return `<input type="tel" ${attr.toString()}>`;
  }
}

module.exports = PhoneInput;
