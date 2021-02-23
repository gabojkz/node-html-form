"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
var TextInput = /** @class */ (function () {
    function TextInput(v, a) {
        this.value = v;
        this.attributes = a;
    }
    TextInput.prototype.build = function () {
        var _this = this;
        return Object.keys(this.attributes).map(function (key) {
            var val = _this.attributes[key];
            if (key === 'required')
                return val ? "required" : "";
            return key + "=\"" + val + "\"";
        }).join(' ');
    };
    TextInput.prototype.render = function () {
        var attr = this.build();
        return "<input type=\"text\" " + attr + " value=\"" + this.value + "\">";
    };
    return TextInput;
}());
exports.TextInput = TextInput;
