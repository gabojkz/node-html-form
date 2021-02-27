"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioInput = void 0;
var RadioInput = /** @class */ (function () {
    function RadioInput(v, a) {
        this.value = v;
        this.attributes = a;
    }
    RadioInput.prototype.render = function (attr) {
        return "<input type=\"radio\" " + attr + " value=\"" + this.value + "\">";
    };
    return RadioInput;
}());
exports.RadioInput = RadioInput;
