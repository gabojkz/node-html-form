'use strict';
import { expect } from "chai";
import { TextInput } from "../../inputs/text_input";

describe('TextInput', function () {
  it('should be an object', function () {
    const input = new TextInput("some value", {});
    expect(input).to.be.an.instanceof(TextInput);
  });
  it('should render a valid html input', function () {
    const input = new TextInput("some value", { 
        id: 'name', 
        name: 'name', 
        required: true, 
        minLength: 4, 
        maxLength: 8, 
        size: 10 
      });

    expect(input.render()).to.be.equal('<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" value="some value">');
  });

  it('should contain the valid attributes', function () {
    const input = new TextInput("some value", { id: 'random' });

    console.log(input.build());

  })
});
