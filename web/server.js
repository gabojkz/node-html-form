const express = require('express');
const app = express();
const port = 3000;
const forms = require('./forms');

app.set('view engine', 'pug');
app.set('views', 'web/views');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Node forms',
    message: 'Hello there!',
    form: forms.registrationForm.buildAsP(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
