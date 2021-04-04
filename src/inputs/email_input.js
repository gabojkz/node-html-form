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
 * Html input email
 * @example
 *    <input type="email" id="id_email" value="example@mail.com" name="email">
 */
class EmailInput extends InputText {
  /**
   * @param {string} name - form structure key name
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
    return `<input type="email" ${attr.toString()}>`;
  }
}

module.exports = EmailInput;
