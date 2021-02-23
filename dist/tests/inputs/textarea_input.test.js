'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var textarea_input_1 = require("../../inputs/textarea_input");
describe('TextAreaInput', function () {
    it('should be an object', function () {
        var input = new textarea_input_1.TextAreaInput("some value", {});
        chai_1.expect(input).to.be.an.instanceof(textarea_input_1.TextAreaInput);
    });
    it('should render a valid html input', function () {
        var input = new textarea_input_1.TextAreaInput("some value", {
            id: 'name',
            name: 'name',
            required: true,
            minLength: 4,
            maxLength: 8,
            size: 10
        });
        chai_1.expect(input.render()).to.be.equal('<textarea id="name" name="name" required minLength="4" maxLength="8" size="10" value="some value">');
    });
    it('should contain the valid attributes', function () {
        var input = new textarea_input_1.TextAreaInput("some value", { id: 'random' });
        console.log(input.build());
    });
});
