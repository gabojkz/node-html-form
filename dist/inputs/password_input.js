"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordInput = void 0;
var PasswordInput = /** @class */ (function () {
    function PasswordInput(v, a) {
        this.value = v;
        this.attributes = a;
    }
    PasswordInput.prototype.build = function () {
        var _this = this;
        return Object.keys(this.attributes).map(function (key) {
            var val = _this.attributes[key];
            if (key === 'required')
                return val ? "required" : "";
            return key + "=\"" + val + "\"";
        }).join(' ');
    };
    PasswordInput.prototype.render = function () {
        var attr = this.build();
        return "<input type=\"text\" " + attr + " value=\"" + this.value + "\">";
    };
    return PasswordInput;
}());
exports.PasswordInput = PasswordInput;
