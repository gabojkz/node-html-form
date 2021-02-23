'use strict';

const chai = require('chai')
const expect = chai.expect
const BaseForm = require('../../lib/Form')
const {FormError} = require('../../lib/Exceptions')

class Test extends BaseForm {
  constructor(data)
  {
    super()
    this.name = this.inputField(data.name)
    this.lastname = this.inputField(data.lastname, {
      required: false,
      minLength: 15
    })
    this.email = this.emailField(data.email, {check: [this.existsUser]})
    this.password = this.passwordField(data.password)
    this.confirmPassword = this.passwordField(data.confirmPassword, {check: [this.comparePasswords]})
  }

  existsUser(email)
  {
    if (email === 'fksdfj3DScds.net') {
      throw new FormError('email already exists')
    } 
  }

  comparePasswords()
  { 
    if (this.password.value !== this.confirmPassword.value){
      throw new FormError('passwords don\'t match')
    }
  }
}

describe('Form lib', async function()
{
  it('invalid test', async function() {
    let form = new Test({
      name: '', 
      lastname: 'too short',
      email: 'fksdfj3DScds.net',
      password: 'weakPass',
      confirmPassword: 'SuperStrongPass1232.',
    })

    const errors = await form.errors()
    expect(errors).to.deep.equal(
      [
       'name cannot be left blank',
       'lastname is too short minimum is 15 characters',
       'enter a valid email address',
       'password must contain at least 1 lowercase, 1 uppercase, 1 symbol(!@#$%^&*.) and 1 number minimum 8 characters',
       "confirm password does not match",
      ])
  })

  it('valid test', async function() {
    let form = new Test({
      name: 'javascript', 
      lastname: 'super long last name goes here',
      email: 'some@email.com',
      password: 'SuperStrongPass12.',
      confirmPassword: 'SuperStrongPass12.',
    })

    const errors = await form.errors()

    expect(errors).to.deep.equal([])
    expect(errors.length).to.equal(0)
  })
})