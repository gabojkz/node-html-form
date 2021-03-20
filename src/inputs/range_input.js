const AttributeBuilder = require('../core/attr_builder');

/**
 * @typedef Structure
 * @property {string} id
 * @property {[]} class
 * @property {string} type
 * @property {string} value
 * @property {string} name
 * @property {string} placeholder
 * @property {boolean} required
 * @property {number} maxlength
 * @property {number} minlength
 * @property {object} pattern
 * @property {object} spellcheck
 * @property {boolean} readonly
 * @property {number} size
 * @property {boolean} disabled
 * @property {number} min
 * @property {number} max
 */

/**
 * html input type text
 */
class RangeInput {
  /**
   * @param {string} name
   * @param {Structure} structure
   */
  constructor(name, structure) {
    this._name_ = name;

    // name and id and placeholder
    this.class = structure.class;
    this.id = structure.id;
    this.type = structure.type;
    this.value = structure.value || '';
    this.name = structure.name;
    this.placeholder = structure.placeholder || '';
    this.required = structure.required;
    this.maxlength = structure.maxlength;
    this.minlength = structure.minlength;
    this.pattern = structure.pattern;
    this.spellcheck = structure.spellcheck;
    this.readonly = structure.readonly;
    this.size = structure.size;
    this.disabled = structure.disabled;

    this.min = structure.min;
    this.max = structure.max;

    this.htmlAttrs = ['class', 'id', 'name', 'maxlength', 'minlength',
      'pattern', 'placeholder', 'spellcheck', 'readonly', 'size', 'required',
      'disabled', 'max', 'min'];
  }

  /**
   * @return {string}
   */
  get tag() {
    return '<input type="range"' + this.attrs() + `value="${this.value}"` + '>';
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
    if (value) this.value = value;
  }
}

module.exports = RangeInput;
