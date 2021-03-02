/* eslint-disable no-invalid-this */
'use strict';
const chai = require('chai');
const expect = chai.expect;
const FileInput = require('../../inputs/file_input');

describe('FileInput', function() {
  beforeEach(function() {
    this.baseInput = {
      type: 'file',
      class: ['form-control', 'small'],
      name: 'your-name',
      id: 'your-id',
      value: 'val',
    };
  });

  it('can create a new form obj', function() {
    const input = new FileInput(this.baseInput);
    expect(input).to.be.an.instanceof(FileInput);
  });

  it('text input has the correct properties', function() {
    const input = new FileInput(this.baseInput);

    expect(input.type).to.be.equal('file');

    expect(input.class).to.be.an('array')
        .that.deep.equal(['form-control', 'small']);

    expect(input.name).to.be.equal('your-name');

    expect(input.id).to.be.equal('your-id');

    expect(input.value).to.be.equal('val');

    expect(input.htmlAttrs).to.be.an('array')
        .that.deep.equal(['class', 'id', 'name', 'value', 'accept',
          'required', 'disabled', 'capture', 'files', 'multiple']
        );
  });

  it('basic tag element', function() {
    const input = new FileInput({
      id: 'scales',
      name: 'scales',
    });
    expect(input.tag).to.be
        .equal('<input type="file" id="scales" name="scales" required>');
  });

  it('remove required from input', function() {
    const input = new FileInput({
      id: 'f-up',
      name: 'scales',
      required: false,
    });
    expect(input.tag).to.be
        .equal('<input type="file" id="f-up" name="scales">');
  });

  it('includes all the attrs', function() {
    const input = new FileInput({
      id: 'scales',
      class: ['form-control', 'scale'],
      value: '/local-file',
      name: 'scales',
      required: true,
      disabled: true,
      multiple: true,
      accept: '.docs',
    });

    expect(input.tag).to.be.equal(
        '<input type="file" class="form-control scale" id="scales" '+
        'name="scales" value="/local-file" accept=".docs" required disabled ' +
        'multiple>'
    );
  });
});
