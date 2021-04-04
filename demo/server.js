const express = require('express');
const app = express();
const port = 3000;
const forms = require('./forms');
const db = require('./load_db');

app.use(express.urlencoded({
  extended: true
}));


app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', async (req, res) => {
  const data = await db.get();
  const info =  JSON.parse(data);

  res.render('index', {
    title: 'Node forms',
    message: 'My form!',
    form: forms.registrationForm(info),
  });
});

app.post('/', async (req, res) => {
  // TODO validate inputs / render errors
  const cleanData = req.body;

  if (await db.save(cleanData)) {
    res.redirect('/');
    return;
  }

  res.status(500).json({error: 'could not save the data'})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
