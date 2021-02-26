'use strict';
import { expect } from "chai";
import { TextAreaInput } from "../../inputs/textarea_input";

describe('TextAreaInput', function () {
  it('should be an object', function () {
    const input = new TextAreaInput("some value", {});
    expect(input).to.be.an.instanceof(TextAreaInput);
  });
});
