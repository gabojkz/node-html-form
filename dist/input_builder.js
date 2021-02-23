"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBuilder = void 0;
var InputBuilder = /** @class */ (function () {
    function InputBuilder(input) {
    }
    InputBuilder.prototype.build = function () {
        var _this = this;
        return Object.keys(this.attributes).map(function (key) {
            var val = _this.attributes[key];
            if (key === 'required')
                return val ? "required" : "";
            return key + "=\"" + val + "\"";
        }).join(' ');
    };
    return InputBuilder;
}());
exports.InputBuilder = InputBuilder;
