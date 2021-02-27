"use strict";
/**
 * @typedef  {object} Attributes
 * @property {string} id    - input[id]
 * @property {[]}     class - input[class]
 * @property {string} name  - input[name]
 * @property {boolean} required - input[required]
 */
/**
  * html checkbox input
  */
var CheckboxInput = /** @class */ (function () {
    /**
     *
     * @param {string} n - name
     * @param {string} v - value
     * @param {Attributes} a - attributes
     */
    function CheckboxInput(n, v, a) {
        this.name = n;
        this.value = v;
        this.attributes = a;
    }
    /**
     *
     * @param {string} attr
     */
    CheckboxInput.prototype.render = function (attr) {
        return "<input type=\"checkbox\" " + attr + " value=\"" + this.value + "\">";
    };
    return CheckboxInput;
}());
module.exports = CheckboxInput;
