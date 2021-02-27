'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var text_input_1 = require("../../inputs/text_input");
describe('TextInput', function () {
    it('should be an object', function () {
        var input = new text_input_1.TextInput("some value", {});
        chai_1.expect(input).to.be.an.instanceof(text_input_1.TextInput);
    });
});
