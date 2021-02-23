'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var text_input_1 = require("../../inputs/text_input");
describe('TextInput', function () {
    it('should be an object', function () {
        var input = new text_input_1.TextInput("some value", {});
        chai_1.expect(input).to.be.an.instanceof(text_input_1.TextInput);
    });
    it('should render a valid html input', function () {
        var input = new text_input_1.TextInput("some value", {
            id: 'name',
            name: 'name',
            required: true,
            minLength: 4,
            maxLength: 8,
            size: 10
        });
        chai_1.expect(input.render()).to.be.equal('<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" value="some value">');
    });
    it('should contain the valid attributes', function () {
        var input = new text_input_1.TextInput("some value", { id: 'random' });
        console.log(input.build());
    });
});
