/* eslint-disable no-invalid-this */
'use strict';
const chai = require('chai');
const expect = chai.expect;
const TextareaInput = require('../../inputs/textarea_input');

describe('TextareaInput', function() {
  beforeEach(function() {
    this.baseInput = {
      class: ['form-control', 'small'],
      name: 'your-name',
      id: 'your-id',
      value: 'val',
    };
  });

  it('can create a new form obj', function() {
    const input = new TextareaInput(this.baseInput);
    expect(input).to.be.an.instanceof(TextareaInput);
  });

  it('text input has the correct properties', function() {
    const input = new TextareaInput(this.baseInput);

    expect(input.class).to.be.an('array')
        .that.deep.equal(['form-control', 'small']);

    expect(input.name).to.be.equal('your-name');

    expect(input.id).to.be.equal('your-id');

    expect(input.value).to.be.equal('val');

    expect(input.htmlAttrs).to.be.an('array')
        .that.deep.equal(['class', 'id', 'name', 'maxlength', 'minlength',
          'placeholder', 'spellcheck', 'readonly', 'rows', 'cols',
          'required', 'disabled']
        );
  });

  it('basic tag element', function() {
    const input = new TextareaInput({});
    expect(input.tag).to.be
        .equal('<textarea rows="2" cols="20" required ></textarea>');
  });

  it('remove required from input', function() {
    const input = new TextareaInput({required: false});
    expect(input.tag).to.be
        .equal('<textarea rows="2" cols="20" ></textarea>');
  });

  it('includes all the attrs', function() {
    const input = new TextareaInput({
      type: 'text',
      class: ['form-control', 'small'],
      name: 'new-name',
      id: 'text-id',
      value: 'val',
      maxlength: 80,
      minlength: 30,
      cols: 40,
      rows: 30,
      placeholder: 'place-holder',
    });

    expect(input.tag).to.be.equal(
        '<textarea class="form-control small" id="text-id" name="new-name" ' +
        'maxlength="80" minlength="30" placeholder="place-holder" rows="30" ' +
        'cols="40" required >val</textarea>'
    );
  });
});
