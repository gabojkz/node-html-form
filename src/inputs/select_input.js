const AttributeBuilder = require('../core/attr_builder');
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
 * @property {string} caption
 * @property {Array.<string|object>} options
 */

/**
 * html input password
 */
class SelectInput {
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
    this.caption = structure.caption;

    this.htmlAttrs = ['class', 'id', 'name', 'required', 'disabled', 'checked'];

    this._options_ = structure.options.map( (option) => {
      return new Option(this.parseOption(option));
    });
  }

  /**
   * @return {string}
   */
  get tag() {
    let htmlTag = '<select';
    // the option could be partial obj or a string
    // format or parse that to a valid format
    if (this.options && Array.isArray(this.options)) {
      const selectOptions = this._options_.map((option) => {
        return option.tag;
      }).join('');

      htmlTag += this.attrs() ? ' ' + this.attrs() : '';
      htmlTag += '>';

      if (this.caption) {
        const caption = new Option({content: this.caption, value: ''});
        htmlTag += caption.tag;
      }

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

  /**
   * @param {string} value
   */
  setValue(value) {
    const selected = this._options_.find( (opt) => {
      return opt.value == value;
    });
    if (selected) selected.selected = true;
  }
}

module.exports = SelectInput;
