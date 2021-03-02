const AttributeBuilder = require('../attr_builder');
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
 * @property {number} cols
 * @property {object} spellcheck
 * @property {boolean} readonly
 * @property {number} rows
 * @property {boolean} disabled
 */

/**
 * html input textarea
 */
class TextareaInput {
  /**
   * @param {Structure} structure
   */
  constructor(structure) {
    this.class = structure.class;
    this.id = structure.id;
    this.value = structure.value || '';
    this.name = structure.name;
    this.placeholder = structure.placeholder || '';
    this.required = structure.required;
    this.maxlength = structure.maxlength;
    this.minlength = structure.minlength;
    this.spellcheck = structure.spellcheck;
    this.readonly = structure.readonly;
    this.rows = structure.rows || 2;
    this.cols = structure.cols || 20;
    this.disabled = structure.disabled;

    this.htmlAttrs = ['class', 'id', 'name', 'maxlength', 'minlength',
      'placeholder', 'spellcheck', 'readonly', 'rows', 'cols', 'required',
      'disabled'];
  }

  /**
   * @return {string}
   */
  get tag() {
    return '<textarea' + this.attrs() + '>' + this.value + '</textarea>';
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
}

module.exports = TextareaInput;
