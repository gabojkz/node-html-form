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
 * @property {[]} options
 */

/**
 * html radio input
 * @example
 *   <input type="radio" id="id_drone" name="drone" value="huey" checked>
 */
class RadioInput {
  /**
   * @param {string} name
   * @param {Structure} structure
   */
  constructor(name, structure) {
    if (!Array.isArray(structure.options)) {
      throw new Error('radio options are not an array');
    }
    this.options = structure.options.map((radio) => {
      let attr = {
        value: '',
      };

      if (typeof radio === 'string') {
        attr.value = radio;
      }

      if (typeof radio === 'object') {
        attr = radio;
      }

      return new RadioNode(Object.assign({}, structure, attr), name);
    });
  }

  /**
   * @return {string}
   */
  get tag() {
    return this.options.map((option) => option.tag ).join(' ');
  }
}
/** */
class RadioNode {
  /**
   * @param {Structure} radio
   * @param {string} name
   */
  constructor(radio, name) {
    this._name_ = name;
    this.name = radio.name;
    this.value = radio.value;
    this.id = radio.id;
    this.class = radio.class;
    this.required = radio.required;
    this.checked = radio.checked;
    this.disabled = radio.disabled;

    this.htmlAttrs = [
      'id', 'class', 'name', 'value', 'disabled', 'required', 'checked',
    ];
  }

  /**
   * @return {string}
   */
  get tag() {
    const attr = new AttributeBuilder(Object.create(this));
    return `<input type="radio" ${attr.toString()}>`;
  }
}

module.exports = RadioInput;

