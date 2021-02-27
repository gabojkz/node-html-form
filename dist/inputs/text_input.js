"use strict";
/**
 * @typedef  {object} Attributes
 * @property {string} id    - input[id]
 * @property {[]}     class - input[class]
 * @property {string} name  - input[name]
 * @property {boolean} required - input[required]
 */
/**
 * html input type text
 */
var TextInput = /** @class */ (function () {
    /**
     *
     * @param {string} n - name
     * @param {string} v - value
     * @param {Attributes} a - attributes
     */
    function TextInput(n, v, a) {
        this.name = n;
        this.value = v;
        this.attributes = a;
    }
    /**
     * @param {string} attr
     * @return {string}
     */
    TextInput.prototype.render = function (attr) {
        return "<input type=\"text\" " + attr + " value=\"" + this.value + "\">";
    };
    return TextInput;
}());
module.exports = TextInput;
