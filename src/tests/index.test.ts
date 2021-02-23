'use strict';
import { expect } from "chai";
import { NodeForm } from "../index";

describe('NodeForm', function () {
  it('should be an object', function() {
    const form = new NodeForm();
    expect(form).to.be.an.instanceof(NodeForm);
  });
});
