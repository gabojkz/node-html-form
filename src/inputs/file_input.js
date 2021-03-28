const AttributeBuilder = require('../core/attr_builder');
/**
 * @typedef Structure
 * @property {string} [id]
 * @property {Array.<string>} [class]
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
 * Html input file
 * @example
 *    <input type="file" id="id_avatar" name="avatar" accept="image/png">
 */
class FileInput {
  /**
   * @param {string} name - form structure key name
   * @param {Structure} structure
   */
  constructor(name, structure) {
    this._name_ = name;
    this.name = structure.name;

    this.id = structure.id;
    this.class = structure.class;
    this.value = structure.value;
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
    const attr = new AttributeBuilder(Object.create(this));
    return `<input type="file" ${attr.toString()}>`;
  }

  /**
   * @param {string} value
   */
  setValue(value) {
    this.value = value;
  }
}

module.exports = FileInput;
