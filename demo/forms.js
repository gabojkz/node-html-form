const {NodeForm} = require('node-html-forms');

module.exports = {
  registrationForm: function(data) {
    const fields = {
      files: {
        type: 'file',
      },
      name: {
        type: 'text',
        class: 'form-control',
        id: 'user',
      },
      email: {
        type: 'email',
        value: 'gabriel@email.com',
      },
      phone: {
        type: 'phone',
        placeholder: 'your phone number',
      },
      description: {
        type: 'textarea',
        value: 'some content',
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
      activity: {
        type: 'radio',
        options: ['sports', 'gaming', {checked: true, value: 'cooking'}],
      },
      cities: {
        type: 'select',
        multiple: true,
        options: [
          'new york',
          {
            name: 'chicago', value: 'chicago',
          },
          {
            group: 'city',
            items: [
              'San diego',
              {name: 'Las vegas', value: 'Las vegas'},
              {
                group: 'sub category',
                items: ['sub 1', 'sub2'],
              },
            ],
          },
        ],
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

