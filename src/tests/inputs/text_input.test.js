'use strict';
import { expect } from "chai";
import { TextInput } from "../../inputs/text_input";

describe('TextInput', function () {
  it('should be an object', function () {
    const input = new TextInput("some value", {});
    expect(input).to.be.an.instanceof(TextInput);
  });
});
