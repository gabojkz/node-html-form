/* eslint-disable no-invalid-this */
'use strict';
const chai = require('chai');
const expect = chai.expect;
const NodeForm = require('../index');

// Scenario: Print html content
// Give: an object
describe('creating a new object', function() {
  beforeEach(function() {
    this.baseForm = {
      name: {
        type: 'text',
        class: ['form-control', 'small'],
        name: 'your-name',
        id: 'your-name',
      },
    };
  });

  it('can create a new form obj', function() {
    const form = new NodeForm(this.baseForm);
    expect(form).to.be.an.instanceof(NodeForm);
  });

  it('when missing property [type], throw error', function() {
    delete this.baseForm.name.type;
    const self = this;
    expect(function() {
      new NodeForm(self.baseForm);
    }).to.throw('HTML input is missing type attribute');
  });

  it('when missing prop [id], return empty inputs', function() {
    const form = new NodeForm(this.baseForm);
    // @ts-ignore
    expect(form.buildElement('name'))
        .to.be.equal(
            '<label for="your-name">your name</label>' +
            '<input type="text" class="form-control small" ' +
            'id="your-name" name="your-name" required value="">'
        );
  });
});
