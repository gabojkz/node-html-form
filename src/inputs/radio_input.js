const AttributeBuilder = require('../core/attr_builder');
/**
 * @typedef Structure
 * @property {string} id
 * @property {[]} class
 * @property {string} type
 * @property {string} value
 * @property {string} name
 * @property {boolean} checked
 * @property {boolean} required
 * @property {boolean} disabled
 */

/**
 * html input password
 */
class RadioInput {
  /**
   * @param {string} name
   * @param {Structure} structure
   */
  constructor(name, structure) {
    this._name_ = name;

    this.class = structure.class;
    this.id = structure.id;
    this.type = structure.type;
    this.name = structure.name;
    this.value = structure.value;
    this.required = structure.required;
    this.disabled = structure.disabled;
    this.checked = structure.checked;

    this.htmlAttrs = ['class', 'id', 'name', 'required', 'disabled', 'checked'];
  }

  /**
   * @return {string}
   */
  get tag() {
    return '<input type="radio"' +
      this.attrs() + `value="${this.value}"` + '>';
  }

  /**
   * @return {string}
   */
  attrs() {
    const attr = new AttributeBuilder(this);
    const htmlAttributes = attr.build().join(' ');

    // space in front of attrs
    return htmlAttributes ? ' ' + htmlAttributes + ' ' : ' ';
  }

  /**
   * @param {string} value
   */
  setValue(value) {
    console.log(value);
    if (value && this.value == value) {
      this.checked = true;
    }
  }
}

module.exports = RadioInput;
