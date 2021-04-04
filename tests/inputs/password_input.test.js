/* eslint-disable no-invalid-this */
'use strict';
const chai = require('chai');
const expect = chai.expect;
const PasswordInput = require('../../inputs/password_input');

describe('PasswordInput', function() {
  beforeEach(function() {
    this.baseInput = {
      type: 'password',
      class: ['form-control', 'small'],
      name: 'your-name',
      id: 'your-id',
      value: 'val',
    };
  });

  it('can create a new form obj', function() {
    const input = new PasswordInput(this.baseInput);
    expect(input).to.be.an.instanceof(PasswordInput);
  });

  it('text input has the correct properties', function() {
    const input = new PasswordInput(this.baseInput);

    expect(input.type).to.be.equal('password');

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
    const input = new PasswordInput({});
    expect(input.tag).to.be
        .equal('<input type="password" required value="">');
  });

  it('remove required from input', function() {
    const input = new PasswordInput({required: false});
    expect(input.tag).to.be
        .equal('<input type="password" value="">');
  });

  it('includes all the attrs', function() {
    const input = new PasswordInput({
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
        '<input type="password" class="form-control small" id="text-id" ' +
        'name="new-name" maxlength="80" minlength="30" ' +
        'placeholder="place-holder" required value="val">'
    );
  });
});
