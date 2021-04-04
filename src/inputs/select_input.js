const AttributeBuilder = require('../core/attr_builder');
/**
 * @typedef Structure
 * @property {string} id
 * @property {[]} class
 * @property {string} type
 * @property {string} value
 * @property {string} content
 * @property {string} name
 * @property {boolean} selected
 * @property {boolean} required
 * @property {boolean} disabled
 * @property {string} caption
 * @property {Array.<string|object>} options
 * @property {boolean} multiple
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
    this.options = recursiveOptions(name, structure.options);

    this.class = structure.class;
    this.id = structure.id;
    this.name = structure.name;
    this.required = structure.required;
    this.disabled = structure.disabled;
    this.selected = structure.selected;
    this.multiple = structure.multiple;

    this.htmlAttrs = [
      'class', 'id', 'label', 'value', 'selected', 'disabled', 'multiple',
    ];
  }

  /**
   * @return {string}
   */
  get tag() {
    const attr = new AttributeBuilder(Object.create(this));

    const opts = this.options.map((opt) => {
      console.log(opt);
      return opt.tag;
    }).join('');

    return `<select ${attr.toString()}>${opts}</select>`;
  }

  /**
   * @param {string} value
   */
  setValue(value) {
    const selected = this.options.find( (opt) => {
      return opt.value == value;
    });
    if (selected) selected.selected = true;
  }
}


/**
 * html element option
 * @example
 *  <option value="dog">Pet</option>
 */
class OptionNode {
  /**
   * @param {string} name
   * @param {Structure} option
   */
  constructor(name, option) {
    this._name_ = name;

    this.class = option.class;
    this.id = option.id;
    this.name = option.name;
    this.value = option.value;
    this.content = option.value;
    this.required = option.required;
    this.disabled = option.disabled;
    this.selected = option.selected;
    this.options = option.options;
    this.caption = option.caption;
    this.multiple = option.multiple;

    this.htmlAttrs = [
      'class', 'id', 'label', 'value', 'selected', 'disabled', 'multiple',
    ];
  }

  /**
   * @return {string}
   */
  get tag() {
    const attr = new AttributeBuilder(Object.create(this));
    return `<option ${attr.toString()}>${this.content}</option>`;
  }
}

/**
 * @param {string} name
 * @param {Array} options
 * @return {Array<OptionNode|OptionGroupNode>}
 */
function recursiveOptions(name, options) {
  return options.map(function(opt) {
    if (typeof opt === 'object' && 'items' in opt) {
      return new OptionGroupNode(opt.group, recursiveOptions(name, opt.items));
    }

    let option = {};
    if (typeof opt === 'string') {
      option.name = opt;
      option.value = opt;
    }

    if (typeof opt === 'object') {
      option = opt;
    }

    return new OptionNode(name, option);
  });
}

/**
 * option group
 * @example
 *    <optgroup label="Theropods"> ... </optgroup>
 */
class OptionGroupNode {
  /**
   * @param {string} name
   * @param {Array<OptionNode>} options
   */
  constructor(name, options) {
    this.name = name;
    this.options = options;
  }

  /**
   * @return {string}
   */
  get tag() {
    return `<optgroup label="${this.name}">` +
    this.options.map((opt)=> opt.tag).join(' ') +
    '</optgroup>';
  }
}

module.exports = SelectInput;
