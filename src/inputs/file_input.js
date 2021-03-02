const AttributeBuilder = require('../attr_builder');
/**
 * @typedef Structure
 * @property {string} [id]
 * @property {Array.<string>} [class]
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {string} [accept]
 * @property {boolean} [disabled]
 * @property {boolean} [capture]
 * @property {string} [files]
 * @property {boolean} [multiple]
 */

/**
 * html input password
 */
class FileInput {
  /**
   * @param {Structure} structure
   */
  constructor(structure) {
    this.id = structure.id;
    this.class = structure.class;
    this.type = structure.type;
    this.value = structure.value || '';
    this.name = structure.name;
    this.required = structure.required;
    this.disabled = structure.disabled;
    this.accept = structure.accept;
    this.capture = structure.capture;
    this.files = structure.files;
    this.multiple = structure.multiple;

    this.htmlAttrs = ['class', 'id', 'name', 'value', 'accept', 'required',
      'disabled', 'capture', 'files', 'multiple'];
  }

  /**
   * @return {string}
   */
  get tag() {
    return '<input type="file"' + this.attrs() + '>';
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

module.exports = FileInput;
