"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaInput = void 0;
var TextAreaInput = /** @class */ (function () {
    function TextAreaInput(v, a) {
        this.value = v;
        this.attributes = a;
    }
    TextAreaInput.prototype.render = function (attr) {
        return "<textarea " + attr + " value=\"" + this.value + "\">";
    };
    return TextAreaInput;
}());
exports.TextAreaInput = TextAreaInput;
