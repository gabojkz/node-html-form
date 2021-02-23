'use strict';

const validations = {
  required: function(text) {
    return !!text
  },
  minLength: function(text, count=0) {
    return text.length >= count
  },
  email: function(text) {
    return RegExp('[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*').test(text)
  },
  password: function(password){
    // ^	The password string will start this way
    // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    // (?=.*[0-9])	The string must contain at least 1 numeric character
    // (?=.*[.!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    // (?=.{8,})	The string must be eight characters or longer
    return RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\.\$%\^&\*])(?=.{8,})").test(password)
  },
}

module.exports = function(validationName) {
  if(!validations[validationName]) throw new Error(`validation not name \'${validationName}\' not found`)
  return {
    test: validations[validationName]
  }
}

