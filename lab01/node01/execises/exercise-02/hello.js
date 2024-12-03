const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.locals.title = "My web site";
app.locals.email = "io@me.it";

app.get('/tehello/mycontact/:name', (req, res) => {
    res.render('hello', { name: req.params.name, title: app.locals.title, email: app.locals.email });
});

app.listen(3000, (port) => {
    console.log('Server is running on http://localhost:3000');
  });