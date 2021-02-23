'use strict';

const translation = require('../config/locale')


function findMessage(message, inputName, inputValue, requirement)
{
  const niceName = inputName.split(/ |\B(?=[A-Z])/).map(word => lowercase(word) ).join(' ')
  return translation(message).replace('%name%', niceName).replace('%value%', inputValue).replace('%requirement%', requirement)
}

function lowercase(s)
{
  if (typeof s !== 'string') return ''
  return s.charAt(0).toLowerCase() + s.slice(1)
}

module.exports = { findMessage }