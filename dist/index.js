'use strict';
var Label = require('./label');
var TextInput = require('./inputs/text_input');
var buildInput = require('./input');
/**
 * @typedef {object} FormStructure
 * @type {Object.<[key: string], InputNode>}
 */
/**
 * @typedef {object} InputNode
 * @property {string} type
 * @property {[]} classes - array of classes
 */
/**
 * Main class
 */
var NodeForm = /** @class */ (function () {
    /**
     * @param {FormStructure} formStructure
     */
    function NodeForm(formStructure) {
        this.formStructure = formStructure;
        for (var name_1 in formStructure) {
            if ({}.hasOwnProperty.call(formStructure, name_1)) {
                var plainStructure = formStructure[name_1];
                Object.defineProperty(this, name_1, {
                    value: new Label(buildInput(plainStructure, name_1), plainStructure.label),
                });
            }
        }
    }
    return NodeForm;
}());
module.exports = NodeForm;
