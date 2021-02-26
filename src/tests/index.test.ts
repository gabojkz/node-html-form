'use strict';
import { expect } from "chai";
import { NodeForm } from "../index";

// Scenario: Print html content
// Give: an object 
describe('creating a new object', function () {
  it('when empty throw error', function () {
    let classicForm = {
      name: {
        type: 'text',
        classes: ['form-control', 'small'],
        id: 'exampleInput'
      }
    }
    const form = new NodeForm(classicForm);

    const html = form.render();

    expect(form).to.be.an.instanceof(NodeForm);
    expect(html).to.be.equal(
      '<label for="exampleInput"></label>' +
      '<input type="text" class="form-control small" id="exampleInput" required>'
    );
  });
});