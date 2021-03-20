const {NodeForm} = require('node-html-forms');

module.exports = {
  registrationForm: function(data) {
    const fields = {
      name: {
        type: 'text',
        class: 'form-control',
        id: 'user',
      },
      email: {
        type: 'email',
      },
      phone: {
        type: 'phone',
        placeholder: 'your phone number',
      },
      description: {
        type: 'textarea',
      },
      age: {
        type: 'range',
        min: 0,
        max: 100,
      },
      password: {
        type: 'password',
        class: 'form-control',
      },
      remember: {
        class: 'form-check-label',
        type: 'checkbox',
      },
      city: {
        type: 'select',
        caption: '---Pick city---',
        options: data.cars.map((car) => {
          return {value: car.id, name: car.brand};
        }),
      },
      turn: {
        type: 'radio',
        value: 'on',
      },
      activity: {
        type: 'radioMultiple',
        options: ['tv', 'sports', 'gaming'],
      },
      cities: {
        type: 'selectMultiple',
        options: [{
          name: 'chicago', value: 'chicago',
        }],
      },
      url: {
        type: 'url',
        value: 'https://example.com',
      },
      amount: {
        type: 'number',
      },
    };

    return new NodeForm(fields, data.users);
  },
};

