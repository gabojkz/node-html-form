/* eslint-disable no-invalid-this */
'use strict';
const chai = require('chai');
const expect = chai.expect;
const TextInput = require('../../inputs/text_input');

describe('TextInput', function() {
  beforeEach(function() {
    this.baseInput = {
      type: 'text',
      class: ['form-control', 'small'],
      name: 'your-name',
      id: 'your-id',
      value: 'val',
    };
  });

  it('can create a new form obj', function() {
    const input = new TextInput(this.baseInput);
    expect(input).to.be.an.instanceof(TextInput);
  });

  it('text input has the correct properties', function() {
    const input = new TextInput(this.baseInput);

    expect(input.type).to.equal('text');

    expect(input.class).to.be.an('array')
        .that.deep.equal(['form-control', 'small']);

    expect(input.name).to.be.equal('your-name');

    expect(input.id).to.be.equal('your-id');

    expect(input.value).to.be.equal('val');

    expect(input.htmlAttrs).to.be.an('array')
        .that.deep.equal(['class', 'id', 'name', 'maxlength', 'minlength',
          'pattern', 'placeholder', 'spellcheck', 'readonly', 'size',
          'required', 'disabled']
        );
  });

  it('basic tag element', function() {
    const input = new TextInput({});
    expect(input.tag).to.be.equal('<input type="text" required value="">');
  });

  it('remove required from input', function() {
    const input = new TextInput({required: false});
    expect(input.tag).to.be.equal('<input type="text" value="">');
  });

  it('includes all the attrs', function() {
    const input = new TextInput({
      type: 'text',
      class: ['form-control', 'small'],
      name: 'new-name',
      id: 'your-id',
      value: 'val',
      maxlength: 80,
      minlength: 30,
      placeholder: 'place-holder',
    });

    expect(input.tag).to.be.equal(
        '<input type="text" class="form-control small" id="your-id" ' +
        'name="new-name" maxlength="80" minlength="30" ' +
        'placeholder="place-holder" required value="val">'
    );
  });
});
