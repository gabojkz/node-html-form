'use strict';
const chai = require('chai');
const expect = chai.expect;
const attributeStructure = require('../../core/config_core.js');

// const default = {
//   label: {
//     text: undefined,
//     class: undefined,
//     id: undefined,
//     for: 'id_' + name,
//     wrap: false,
//   },
//   for: 'id_' + name,
//   class: undefined,
//   id: 'id_' + name,
//   name: name,
//   maxlength: undefined,
//   minlength: undefined,
//   pattern: undefined,
//   placeholder: undefined,
//   spellcheck: undefined,
//   readonly: undefined,
//   size: undefined,
//   required: true,
//   disabled: false,
//   rows: 2,
//   cols: 20,
//   checked: false,
//   value: undefined,
//   selected: false,
//   indeterminate: false,
//   accept: undefined,
//   capture: false,
//   multiple: true,
// };

describe('default attributes', function() {
  it('should return all default props', function() {
    expect(attributeStructure({})).to.deep.equal({a: 1});
  });
});
