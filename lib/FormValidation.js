'use strict';

const Input = require('../lib/inputs/Input');
const validator = require('../lib/Validations')
const {FormValidationError} = require('../lib/Exceptions');

module.exports = {
  async startChecking(form)
  {
    // No all properties in form are input fields types this returns only 
    // the ones that are.
    const formInputs = Object.keys(form).filter( inputName => {
      return form[inputName] instanceof Input
    }).map( inputName => {
      const input = form[inputName]
      input.name = inputName
      return input
    })

    for (let i = 0, len=formInputs.length; i < len; i++) {
      await this.validate(formInputs[i], form)
    }

    // to avoid printing too many errors
    const errors = formInputs.reduce(function(acc, input) { 
      if (input.errors.length > 0) acc.push(input.errors[0])
      return acc;
    }, [])

    return errors
  },

  async validate(input, form)
  {
    const validationTypes = Object.keys(input.validations)
    input.errors = [];
    for (let i=0, len=validationTypes.length; i < len; i++) {
      const propKey = validationTypes[i];
      let propValue = input.validations[propKey]

      // custom validation made by the user
      if (propKey === 'check') {
        if (!propValue || !Array.isArray(propValue)) throw new Error('check validation property must be a valid Array')
        const customUserChecks = propValue
        if (customUserChecks) {
          for (let i=0, len=customUserChecks; i < customUserChecks.length; i++) {
            try {
              console.log('checikign///', input)
              await customUserChecks[i].call(form, input.value);
            } catch(error) {
              console.log(error)
              input.errors.push(new FormValidationError(error.message, input.name, input.value))
            }
          }
        }
        continue;
      }
      
      let message
      // you can have {require = { value: true, message: 'something'}} or {require = true} this is to normalize that
      if (typeof propValue === 'object') {
        message = propValue.message 
        propValue = propValue.value // doing this assigment at last to not lose all the properties inside the object
      }

      const isValid = validator(propKey).test(input.value, propValue)
      if (!isValid) { 
        console.warn(propKey, input.value, propValue)
        input.errors.push(new FormValidationError(message || propKey, input.name, input.value, propValue))
      }
    }

    return input.errors 
  }
}