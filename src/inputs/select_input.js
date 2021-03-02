const AttributeBuilder = require('../attr_builder');
const Option = require('../inputs/option');
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
 * @property {Array.<string|object>} options
 */

/**
 * html input password
 */
class SelectInput {
  /**
   * @param {Structure} structure
   */
  constructor(structure) {
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
  }

  /**
   * @return {string}
   */
  get tag() {
    let htmlTag = '<select';
    // the option could be partial obj or a string
    // format or parse that to a valid format
    if (this.options && Array.isArray(this.options)) {
      const selectOptions = this.options.map((option) => {
        return new Option(this.parseOption(option));
      }).map((option) => {
        return option.tag;
      }).join('');

      htmlTag += this.attrs() ? ' ' + this.attrs() : '';
      htmlTag += '>';
      htmlTag += selectOptions;
      htmlTag += '</select>'; // close
      return htmlTag;
    }
    htmlTag += this.attrs() ? ' ' + this.attrs() : '';
    htmlTag += '></select>'; // close

    return htmlTag;
  }

  /**
   * @return {string}
   */
  attrs() {
    const attr = new AttributeBuilder(this);
    return attr.build().join(' ');
  }

  /**
   * @param {string|Option} option
   * @return {object}
   */
  parseOption(option) {
    if (typeof option === 'string') {
      return {
        value: option,
        content: option,
      };
    }

    return {
      value: option.value,
      content: option.name,
      selected: option.selected,
      id: option.id,
      class: option.class,
      disabled: option.disabled,
    };
  }
}

module.exports = SelectInput;
