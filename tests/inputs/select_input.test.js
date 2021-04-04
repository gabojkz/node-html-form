
/* eslint-disable no-invalid-this */
'use strict';
const chai = require('chai');
const expect = chai.expect;
const SelectInput = require('../../inputs/select_input');

describe('SelectInput', function() {
  beforeEach(function() {
    this.baseInput = {
      type: 'select',
      class: ['form-control', 'small'],
      name: 'your-name',
      id: 'your-id',
      value: 'val',
    };
  });

  it('can create a new form obj', function() {
    const input = new SelectInput(this.baseInput);
    expect(input).to.be.an.instanceof(SelectInput);
  });

  it('text input has the correct properties', function() {
    const input = new SelectInput(this.baseInput);

    expect(input.type).to.be.equal('select');

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
    const input = new SelectInput({});
    expect(input.tag).to.be
        .equal('<select required></select>');
  });

  it('remove required from input', function() {
    const input = new SelectInput({required: false});
    expect(input.tag).to.be
        .equal('<select></select>');
  });

  it('includes all the attrs', function() {
    const input = new SelectInput({
      class: ['form-control', 'small'],
      name: 'select-name',
      id: 'text-id',
      options: [
        'dog',
        'hamster',
        {value: 'fish', name: 'fish', selected: true},
      ],
    });

    expect(input.tag).to.be.eqls(
        '<select class="form-control small" id="text-id" ' +
        'name="select-name" required>' +
        '<option value="dog">dog</option>'+
        '<option value="hamster">hamster</option>' +
        '<option value="fish" selected>fish</option>' +
        '</select>'
    );
  });
});
