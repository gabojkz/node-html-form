const AttributeBuilder = require('../core/attr_builder');
/**
 * @typedef Structure
 * @property {string} [id]
 * @property {Array.<string>} [class]
 * @property {string} value
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {boolean} [checked]
 * @property {boolean} [indeterminate]
 * @property {boolean} [disabled]
 */

/**
 * Single html input checkbox
 * @example
 *    <input type="checkbox" id="id_scales" value="scale" name="scales" checked>
 */
class CheckboxInput {
  /**
   * @param {string} name - form structure key name
   * @param {Structure} structure
   */
  constructor(name, structure) {
    this._name_ = name;
    this.name = structure.name;
    this.id = structure.id;
    this.class = structure.class;
    this.checked = structure.checked;
    this.required = structure.required;
    this.indeterminate = structure.indeterminate;
    this.disabled = structure.disabled;

    // set default value
    this.value = !structure.value ? name : structure.value;

    this.htmlAttrs = ['id', 'class', 'name', 'value', 'checked', 'required',
      'indeterminate', 'disabled'];
  }

  /**
   * @return {string}
   */
  get tag() {
    const attrs = new AttributeBuilder(Object.create(this));
    return `<input type="checkbox" ${ attrs.toString() } >`;
  }

  /**
   * acticate checkbox
   */
  setChecked() {
    this.checked = true;
  }
}

module.exports = CheckboxInput;
