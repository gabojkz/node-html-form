'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var textarea_input_1 = require("../../inputs/textarea_input");
describe('TextAreaInput', function () {
    it('should be an object', function () {
        var input = new textarea_input_1.TextAreaInput("some value", {});
        chai_1.expect(input).to.be.an.instanceof(textarea_input_1.TextAreaInput);
    });
});
