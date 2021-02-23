"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaInput = void 0;
var TextAreaInput = /** @class */ (function () {
    function TextAreaInput(v, a) {
        this.value = v;
        this.attributes = a;
    }
    TextAreaInput.prototype.build = function () {
        var _this = this;
        return Object.keys(this.attributes).map(function (key) {
            var val = _this.attributes[key];
            if (key === 'required')
                return val ? "required" : "";
            return key + "=\"" + val + "\"";
        }).join(' ');
    };
    TextAreaInput.prototype.render = function () {
        var attr = this.build();
        return "<textarea " + attr + " value=\"" + this.value + "\">";
    };
    return TextAreaInput;
}());
exports.TextAreaInput = TextAreaInput;
