/* eslint-disable no-invalid-this */
'use strict';
const chai = require('chai');
const expect = chai.expect;
const RadioInput = require('../../inputs/radio_input');

describe('RadioInput', function() {
  beforeEach(function() {
    this.baseInput = {
      type: 'radio',
      class: ['form-control', 'small'],
      name: 'your-name',
      id: 'your-id',
      value: 'val',
    };
  });

  it('can create a new form obj', function() {
    const input = new RadioInput(this.baseInput);
    expect(input).to.be.an.instanceof(RadioInput);
  });

  it('text input has the correct properties', function() {
    const input = new RadioInput(this.baseInput);

    expect(input.type).to.be.equal('radio');

    expect(input.class).to.be.an('array')
        .that.deep.equal(['form-control', 'small']);

    expect(input.name).to.be.equal('your-name');

    expect(input.id).to.be.equal('your-id');

    expect(input.value).to.be.equal('val');

    expect(input.htmlAttrs).to.be.an('array')
        .that.deep.equal(['class', 'id', 'name', 'required', 'disabled',
          'checked']
        );
  });

  it('basic tag element', function() {
    const input = new RadioInput({});
    expect(input.tag).to.be
        .equal('<input type="radio" required value="">');
  });

  it('remove required from input', function() {
    const input = new RadioInput({required: false});
    expect(input.tag).to.be
        .equal('<input type="radio" value="">');
  });

  it('includes all the attrs', function() {
    const input = new RadioInput({
      class: ['form-control', 'small'],
      name: 'new-name',
      id: 'text-id',
      value: 'val',
      checked: true,
    });

    expect(input.tag).to.be.equal(
        '<input type="radio" class="form-control small" id="text-id" ' +
        'name="new-name" required checked value="val">'
    );
  });
});
