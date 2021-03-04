const AttributeBuilder = require('../attr_builder');
/**
 * @typedef Structure
 * @property {string} [id]
 * @property {Array.<string>} [class]
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {boolean} [checked]
 * @property {boolean} [indeterminate]
 * @property {boolean} [disabled]
 */

/**
 * html input password
 */
class CheckboxInput {
  /**
   * @param {string} name
   * @param {Structure} structure
   */
  constructor(name, structure) {
    this._name_ = name;
    this.id = structure.id;
    this.class = structure.class;
    this.type = structure.type;
    this.value = structure.value || '';
    this.name = structure.name;
    this.checked = structure.checked || '';
    this.required = structure.required;
    this.indeterminate = structure.indeterminate;
    this.disabled = structure.disabled;

    this.htmlAttrs = ['class', 'id', 'name', 'value', 'checked', 'required',
      'indeterminate', 'disabled'];
  }

  /**
   * @return {string}
   */
  get tag() {
    return '<input type="checkbox"' + this.attrs() + '>';
  }

  /**
   * @return {string}
   */
  attrs() {
    const attr = new AttributeBuilder(this);
    const htmlAttributes = attr.build().join(' ');

    // space in front of attrs
    return htmlAttributes ? ' ' + htmlAttributes : ' ';
  }
}

module.exports = CheckboxInput;
