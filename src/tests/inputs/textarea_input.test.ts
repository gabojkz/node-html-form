'use strict';
import { expect } from "chai";
import { TextAreaInput } from "../../inputs/textarea_input";

describe('TextAreaInput', function () {
  it('should be an object', function () {
    const input = new TextAreaInput("some value", {});
    expect(input).to.be.an.instanceof(TextAreaInput);
  });
  it('should render a valid html input', function () {
    const input = new TextAreaInput("some value", { 
        id: 'name', 
        name: 'name', 
        required: true, 
        minLength: 4, 
        maxLength: 8, 
        size: 10 
      });

    expect(input.render()).to.be.equal('<textarea id="name" name="name" required minLength="4" maxLength="8" size="10" value="some value">');
  });

  it('should contain the valid attributes', function () {
    const input = new TextAreaInput("some value", { id: 'random' });

    console.log(input.build());
  });
});
