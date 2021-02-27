'use strict';
import { expect } from "chai";
import { InputFactory } from "../input_factory";

describe('InputFactory', function () {
  it('should be an object', function() {
    const factory = new InputFactory();
    expect(factory).to.be.an.instanceof(InputFactory);
  });
});
