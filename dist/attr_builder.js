"use strict";
/** @module AttibuteBuilder */
/**
 * @typedef {object} Label
 * @property {Array.<string>} htmlAttrs
 * @property {string} for
 * @property {[]} class
 * @property {string} id
 */
/**
 * build html attributes
 */
var AttributeBuilder = /** @class */ (function () {
    /**
     * @param {Label} element
     */
    function AttributeBuilder(element) {
        this.element = element;
    }
    /**
     * @return {string|void}
     */
    AttributeBuilder.prototype.for = function () {
        if (!this.element.for)
            return;
        return "for=\"" + this.element.for + "\"";
    };
    /**
     * @return {string|void}
     */
    AttributeBuilder.prototype.class = function () {
        if (!this.element.class)
            return;
        return "class=\"" + this.element.class.join(' ') + "\"";
    };
    /**
     * @return {string|void}
     */
    AttributeBuilder.prototype.id = function () {
        if (!this.element.id)
            return;
        return "class=\"" + this.element.id + "\"";
    };
    /**
     * build attributes for the input
     * @return {string} html attributes
     */
    AttributeBuilder.prototype.build = function () {
        /**
         * @name AttributeBuilder#self
         * @type  {Object.<{key: string}, Function>}
         */
        var self = this;
        var htmlAttributes = this.element.htmlAttrs.map(function (attrName) {
            if (!{}.hasOwnProperty.call(self, attrName)) {
                throw new Error("html attribute " + attrName + " not found");
            }
            return self[attrName]();
        }).join(' ');
        return htmlAttributes;
    };
    return AttributeBuilder;
}());
module.exports = AttributeBuilder;
