const AttributeBuilder = require('../core/attr_builder');
const Option = require('../inputs/option');
const OptionGroup = require('../inputs/option_group');
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
class SelectMultipleInput {
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

    // THIS NEEDS TO BE FIXED
    this._options_ = this.parseOptions(structure.options);
  }

  /**
   * @return {string}
   */
  get tag() {
    let htmlTag = '<select multiple';
    // the option could be partial obj or a string
    // format or parse that to a valid format

    if (this.options && Array.isArray(this.options)) {
      // const selectOptions = this.options.map((option) => {
      //   return this.parseOption(option);
      // }).map((option) => {
      //   return option.tag;
      // }).join('');

      htmlTag += this.attrs() ? ' ' + this.attrs() : '';
      htmlTag += '>';
      // htmlTag += selectOptions;
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
   * @param {string|Object} option
   * @return {object}
   */
  parseOptions(option) {

    if (typeof option === 'string') {
      return new Option({
        value: option,
        content: option,
      });
    }


    if ('group' in option) {
      const items = option.items ? option.items : new Array(option);
      const optionGroup = new OptionGroup(option.group);

      items.forEach((option) => {
        optionGroup.addOption({ 
          content: option.name, 
          ...option,
        });
      });

      return optionGroup;
    }

    return new Option({ 
      value: option.value,
      content: option.name, 
      ...option,
    })
  }

  /**
   * @param {string} value
   */
  setValue(value) {
    if(value) {
      console.log(value);

    }
  }
}

module.exports = SelectMultipleInput;
