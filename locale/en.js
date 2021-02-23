/** 
 * Use:
 * %name% for the input name
 * %value% for the input value 
 * %requirement% value for input value to be compare and hold as valid
 */
const translations = {
  form_errors: {
    "defaultError": "%name% cannot be left blank",
    "minLength": "%name% is too short minimum is %requirement% characters",
    "check": "Invalid %name% format",
    "invalid eamil":  "Your email is invalid please check",
    "passwords don't match": "%name% does not match",
    
    // input type validation messages
    "email": "enter a valid email address",
    "password": "%name% must contain at least 1 lowercase, 1 uppercase, 1 symbol(!@#$%^&*.) and 1 number minimum 8 characters",
  }
}

module.exports = translations