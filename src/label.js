const AttributeBuilder = require('./attr_builder');

/**
 * html label element
 *
 * @example
 *   <label for="male">Text value</label>
 */
class Label {
  /**
   * @param {InputElement} input
   * @param {Structure} structure
   * @property {Array.<string>} htmlAttrs
   */
  constructor(input, structure) {
    this.input = input;

    const plainLabel = structure.label || {};

    this._text = plainLabel.text;
    this.class = plainLabel.classes;
    this.id = plainLabel.id;
    this.for = plainLabel.for || structure.id;
    this.wrap = plainLabel.wrap || false;
    this.htmlAttrs = ['for', 'class', 'id'];
  }

  /**
   * label text value
   * @return {string}
   */
  get text() {
    // when text=false
    if (typeof this._text === 'boolean') return '';

    // when text=someValue
    if (this._text) return this._text;

    // when undefined or null
    return this.for ? prettyCase(this.for) : '';
  }

  /**
   * tag html element
   */
  get tag() {
    return '<label' + this.attrs() + '>' + this.text + '</label>';
  }

  /**
   *  @return {string}
   */
  build() {
    // wraps the label around the input tag
    if (this.wrap) {
      return '<label' + this.attrs() + '>' +
        this.text + ' ' + this.input.tag + '</label>';
    }

    return this.tag + this.input.tag;
  }

  /**
   * @return {string}
   */
  attrs() {
    const attr = new AttributeBuilder(this);
    const htmlAttributes = attr.build().join(' ');

    // space in front of attrs
    return htmlAttributes ? ' ' + htmlAttributes : '';
  }
}

/**
 *
 * @param {string} text
 * @return {string}
 */
function prettyCase(text) {
  return text.charAt(0) + text.replace(/[-_]/g, ' ').slice(1);
}

/**
 * if string contains ' or " scape it
 * @param {string} text
 * @return {string}
 */
// function escape(text) {
//   return text.replace(/['"]/g, '\\\'');
// }

module.exports = Label;

/**
 * @typedef {object} PlainLabel
 * @property {string} for - html attr match input id
 * @property {[]} classes - html attr
 * @property {string} id  - html attr
 * @property {string|boolean} text
 * @property {boolean} wrap
 */

/**
 * @typedef Structure
 * @property {PlainLabel} label
 * @property {string} id
 */

/**
  * @typedef InputNode
  * @property {string} type
  * @property {unknown} value
  */

/**
 * @typedef InputElement
 * @type Object.<string, object>
 */

