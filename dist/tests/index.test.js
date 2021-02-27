'use strict';
var chai = require('chai');
var expect = chai.expect;
var NodeForm = require('../index');
// Scenario: Print html content
// Give: an object
describe('creating a new object', function () {
    it('when empty throw error', function () {
        var classicForm = {
            name: {
                type: 'text',
                classes: ['form-control', 'small'],
                name: 'your-name',
                id: 'your-name',
                label: {
                    wrap: true,
                    text: 'Your name',
                },
            },
        };
        var form = new NodeForm(classicForm);
        console.log(form);
        expect(form).to.be.an.instanceof(NodeForm);
    });
});
