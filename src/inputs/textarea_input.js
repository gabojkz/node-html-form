const AttributeBuilder = require('../core/attr_builder');
/**
 * @typedef Structure
 * @property {string} id
 * @property {[]} class
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
 * @property {boolean} autocomplete
 * @property {boolean} autofocus
 */

/**
 * html input textarea
 * @example
 *    <textarea id="id_desc" name="desc" rows="2" cols="20" required="">
 *     content...
 *    </textarea>
 */
class TextareaInput {
  /**
   * @param {string} name
   * @param {Structure} structure
   */
  constructor(name, structure) {
    this._name_ = name;
    this.name = structure.name;
    this.class = structure.class;
    this.id = structure.id;
    this.content = structure.value;
    this.placeholder = structure.placeholder;
    this.required = structure.required;
    this.maxlength = structure.maxlength;
    this.minlength = structure.minlength;
    this.spellcheck = structure.spellcheck;
    this.readonly = structure.readonly;
    this.rows = structure.rows;
    this.cols = structure.cols;
    this.disabled = structure.disabled;
    this.autocomplete = structure.autocomplete;
    this.autofocus = structure.autofocus;

    this.htmlAttrs = ['class', 'id', 'name', 'maxlength', 'minlength',
      'placeholder', 'spellcheck', 'readonly', 'rows', 'cols', 'required',
      'disabled', 'autocomplete', 'autofocus'];
  }

  /**
   * @return {string}
   */
  get tag() {
    const attr = new AttributeBuilder(Object.create(this));
    return `<textarea ${attr.toString()}>${this.content}</textarea>`;
  }

  /**
   * @param {string} value
   */
  setValue(value) {
    if (value) this.content = value;
  }
}

module.exports = TextareaInput;
