'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var input_factory_1 = require("../input_factory");
describe('InputFactory', function () {
    it('should be an object', function () {
        var factory = new input_factory_1.InputFactory();
        chai_1.expect(factory).to.be.an.instanceof(input_factory_1.InputFactory);
    });
});
