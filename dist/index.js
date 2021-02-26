'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeForm = void 0;
var text_input_1 = require("./inputs/text_input");
var NodeForm = /** @class */ (function () {
    function NodeForm(formStructure) {
        this.formStructure = formStructure;
    }
    NodeForm.prototype.render = function () {
        var fromKeyToInput = {
            'text': text_input_1.TextInput,
        };
        console.log('render');
        try {
            var inputs = Object.keys(this.formStructure)
                .map(function (key) {
                console.log(key);
                if (!fromKeyToInput[key])
                    throw new TypeError('Input not found');
                console.log(key);
                return fromKeyToInput[key];
            });
            console.log('inputs', inputs);
        }
        catch (error) {
            console.log(error);
        }
    };
    return NodeForm;
}());
exports.NodeForm = NodeForm;
