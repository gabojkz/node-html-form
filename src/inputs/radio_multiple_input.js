const AttributeBuilder = require('../core/attr_builder');
const RadioInput = require('./radio_input');
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
 * html input password
 */
class RadioMultipleInput {
  /**
   * @param {string} name
   * @param {Structure} structure
   */
  constructor(name, structure) {
    this._name_ = name;

    this.class = structure.class;
    this.id = structure.id;
    this.type = structure.type;
    this.name = structure.name;
    this.value = structure.value || '';
    this.required = structure.required;
    this.disabled = structure.disabled;
    this.checked = structure.checked;

    this.options = structure.options;

    this.htmlAttrs = ['class', 'id', 'name', 'required', 'disabled', 'checked'];

    this._options_ = this.options.map( (option) => {
      const opt = new RadioInput(name, {
        name: name, value: option,
      });
      return opt;
    });
  }

  /**
   * @return {string}
   */
  get tag() {
    console.log(this._options_);
    const htmlTag = this._options_.map( (option) => {
      return option.tag;
    }).join('');

    return htmlTag;
  }

  // /**
  //  * @return {string}
  //  */
  // attrs() {
  //   const attr = new AttributeBuilder(this);
  //   const htmlAttributes = attr.build().join(' ');

  //   // space in front of attrs
  //   return htmlAttributes ? ' ' + htmlAttributes + ' ' : ' ';
  // }
  /**
   * @param {string} value
   */
  setValue(value) {
    if (value) {
      const option = this._options_.find((opt) => {
        return opt.value == value;
      });

      option.checked = true;
    }
  }
}

module.exports = RadioMultipleInput;
