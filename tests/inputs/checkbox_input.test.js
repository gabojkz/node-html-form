/* eslint-disable no-invalid-this */
'use strict';
const chai = require('chai');
const expect = chai.expect;
const CheckboxInput = require('../../inputs/checkbox_input');

describe('CheckboxInput', function() {
  beforeEach(function() {
    this.baseInput = {
      type: 'checkbox',
      class: ['form-control', 'small'],
      name: 'your-name',
      id: 'your-id',
      value: 'val',
    };
  });

  it('can create a new form obj', function() {
    const input = new CheckboxInput(this.baseInput);
    expect(input).to.be.an.instanceof(CheckboxInput);
  });

  it('text input has the correct properties', function() {
    const input = new CheckboxInput(this.baseInput);

    expect(input.type).to.be.equal('checkbox');

    expect(input.class).to.be.an('array')
        .that.deep.equal(['form-control', 'small']);

    expect(input.name).to.be.equal('your-name');

    expect(input.id).to.be.equal('your-id');

    expect(input.value).to.be.equal('val');

    expect(input.htmlAttrs).to.be.an('array')
        .that.deep.equal(['class', 'id', 'name', 'value', 'checked',
          'required', 'indeterminate', 'disabled']
        );
  });

  it('basic tag element', function() {
    const input = new CheckboxInput({
      id: 'scales',
      name: 'scales',
    });
    expect(input.tag).to.be
        .equal('<input type="checkbox" id="scales" name="scales" required>');
  });

  it('remove required from input', function() {
    const input = new CheckboxInput({
      id: 'scales',
      name: 'scales',
      required: false,
      checked: true,
    });
    expect(input.tag).to.be
        .equal('<input type="checkbox" id="scales" name="scales" checked>');
  });

  it('includes all the attrs', function() {
    const input = new CheckboxInput({
      id: 'scales',
      class: ['form-control', 'scale'],
      value: 'scale',
      name: 'scales',
      required: true,
      checked: true,
      indeterminate: true,
      disabled: true,
    });

    expect(input.tag).to.be.equal(
        '<input type="checkbox" class="form-control scale" id="scales" '+
        'name="scales" value="scale" checked required indeterminate disabled>'
    );
  });
});
