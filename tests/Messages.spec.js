'use strict';
const chai = require('chai')
const expect = chai.expect

const TextInput = require('../lib/inputs/TextInput')


it('show process the input', async () => {
  const input = new TextInput('value', {
    required: true,
    minLength: { value: 15, message: 'min is 15'},
    // check: [ function() { console.log('print some value') }]
  })

  const errors = await input.startValidation()
  console.log(errors)
})

// validation(n)
  // n == message
// run a validation it returns a result true | false
// if false return an error message