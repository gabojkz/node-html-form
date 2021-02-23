'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
describe('NodeForm', function () {
    it('should be an object', function () {
        var form = new index_1.NodeForm();
        chai_1.expect(form).to.be.an.instanceof(index_1.NodeForm);
    });
});
