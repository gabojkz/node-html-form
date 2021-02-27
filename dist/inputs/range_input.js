"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxInput = void 0;
var CheckboxInput = /** @class */ (function () {
    function CheckboxInput(v, a) {
        this.value = v;
        this.attributes = a;
    }
    CheckboxInput.prototype.render = function (attr) {
        return "<input type=\"range\" min=\"5\" max=\"10\" step=\"0.01\" >";
    };
    return CheckboxInput;
}());
exports.CheckboxInput = CheckboxInput;
