'use strict';
const chai = require('chai');
const expect = chai.expect;
const NodeForm = require('../index');

// Scenario: Print html content
// Give: an object
describe('creating a new object', function() {
  it('when empty throw error', function() {
    const classicForm = {
      name: {
        type: 'text',
        classes: ['form-control', 'small'],
        name: 'your-name',
        id: 'your-name',
      },
    };
    const form = new NodeForm(classicForm);

    // console.log(form);
    console.log(form.name.tag);

    expect(form).to.be.an.instanceof(NodeForm);
  });
});
