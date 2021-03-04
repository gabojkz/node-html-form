const NodeForm = require('../src/index');

const registerBase = {
  name: {
    type: 'text',
    class: 'form-contorl',
    id: 'user',
  },
  password: {
    type: 'password',
  },
  remember: {
    type: 'checkbox',
  },
};

module.exports = {
  registrationForm: new NodeForm(registerBase),
};

