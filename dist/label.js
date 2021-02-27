"use strict";
var AttributeBuilder = require('./attr_builder');
/**
 * @typedef {object} PlainLabel
 * @property {string} for - html attr match input id
 * @property {[]} classes - html attr
 * @property {string} id  - html attr
 * @property {string|boolean} text
 */
/**
 * TODO: make sure the for attr match the input id
 */
/**
 * html label element
 *
 * @example
 *   <label for="male">Text value</label>
 */
var Label = /** @class */ (function () {
    /**
     * @param {Input} input
     * @param {PlainLabel} plainLabel
     * @property {Array.<string>} htmlAttrs
     */
    function Label(input, plainLabel) {
        this.for = plainLabel.for;
        this.class = plainLabel.classes;
        this.id = plainLabel.id;
        this.input = input;
        this.htmlAttrs = ['for', 'class', 'id'];
    }
    Object.defineProperty(Label.prototype, "text", {
        /**
         * label text value
         * @return {string}
         */
        get: function () {
            // when text=false
            if (typeof this.text === 'boolean' && this.text === false)
                return '';
            // when text=someValue
            if (this.text)
                return this.text;
            // when undefined or null
            return prettyCase(this.id);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "tag", {
        /**
         * tag html element
         */
        get: function () {
            var attr = new AttributeBuilder(this);
            return "<label " + attr.build() + ">" + this.text + '</label>';
        },
        enumerable: false,
        configurable: true
    });
    return Label;
}());
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
