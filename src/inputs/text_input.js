const AttributeBuilder = require('../core/attr_builder');

/**
 * @typedef Structure
 * @property {string} [id]
 * @property {[]} [class]
 * @property {string} [type]
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
class TextInput {
  /**
   * @param {string} name
   * @param {Structure} structure
   */
  constructor(name, structure) {
    this._name_ = name;
    this.name = structure.name;

    // name and id and placeholder
    this.class = structure.class;
    this.id = structure.id;
    this.type = structure.type;
    this.value = structure.value;
    this.placeholder = structure.placeholder;
    this.required = structure.required;
    this.maxlength = structure.maxlength;
    this.minlength = structure.minlength;
    this.pattern = structure.pattern;
    this.spellcheck = structure.spellcheck;
    this.readonly = structure.readonly;
    this.size = structure.size;
    this.disabled = structure.disabled;

    this.htmlAttrs = ['class', 'id', 'name', 'maxlength', 'minlength',
      'pattern', 'placeholder', 'spellcheck', 'readonly', 'size', 'required',
      'disabled', 'value'];
  }


  /**
   * @return {string}
   */
  get tag() {
    const attr = new AttributeBuilder(Object.create(this));
    return `<input type="text" ${attr.toString()}>`;
  }

  /**
   * @param {string} value
   */
  setValue(value) {
    this.value = value;
  }
}

module.exports = TextInput;
