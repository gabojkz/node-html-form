"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordInput = void 0;
var PasswordInput = /** @class */ (function () {
    function PasswordInput(v, a) {
        this.value = v;
        this.attributes = a;
    }
    PasswordInput.prototype.render = function (attr) {
        return "<input type=\"text\" " + attr + " value=\"" + this.value + "\">";
    };
    return PasswordInput;
}());
exports.PasswordInput = PasswordInput;
