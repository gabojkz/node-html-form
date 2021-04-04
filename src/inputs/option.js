const AttributeBuilder = require('../core/attr_builder');
/**
 * @typedef Structure
 * @property {string} [id]
 * @property {[]} [class]
 * @property {string} value
 * @property {string} [name]
 * @property {boolean} [checked]
 * @property {boolean} [required]
 * @property {string} [label]
 * @property {boolean} [disabled]
 * @property {boolean} [selected]
 * @property {string} content
 */

/**
 * html element option
 * @example
 *  <option value="dog">Pet</option>
 */
class Option {
  /**
   * @param {Structure} structure
   */
  constructor(structure) {
    this.id = structure.id;
    this.class = structure.class;
    this.label = structure.label;
    this.content = structure.content;
    this.value = structure.value || '';
    this.selected = structure.selected;
    this.disabled = structure.disabled;

    this.htmlAttrs = ['class', 'id', 'label', 'value', 'selected', 'disabled'];
  }

  /**
   * @return {string}
   */
  get tag() {
    const attr = new AttributeBuilder(Object.create(this));
    return `<option ${attr.toString()}>${this.content}</option>`;
  }
}

module.exports = Option;
