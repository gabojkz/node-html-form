'use strict';
const Option = require('./option');
/***/
class OptionGroup {
  /**
   * @param {string} content
   */
  constructor(content) {
    this.content = content;
    /** @type {[Option]|[]} */
    this.options = [];
  }

  /**
   * @param {Option} option
   */
  addOption(option) {
    if (option) {
      this.options.push(new Option(option));
    }
  }

  /**
   * @return {string}
   */
  get tag() {
    let htmlTag = '';
    htmlTag += `<optgroup label="${this.content}">`;
    htmlTag += this.options.map((option) => option.tag).join('');
    htmlTag += '</optgroup>';

    return htmlTag;
  }

  /**
   * @param {string} value
   */
  setValue(value) {
    console.log(value);
    // if (value && value == this.value) this.checked = true;
  }
}

module.exports = OptionGroup;
