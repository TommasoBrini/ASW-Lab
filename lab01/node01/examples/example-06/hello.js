const express = require('express');
const app = express();

app.set('view engine', 'pug');

//  Definire una rotta tehello/nome che prenda come parametro un nome e renderizzi il template hello.
app.get('/hello/:name', (req, res) => {
    res.render('hello', { name: req.params.name });
});

app.get('/conta/:numero', (req, res) => {
    nums = [];
    for (let i = 0; i <= req.params.numero; i++) {
        nums.push(i);
    }
    res.render("visualizza_numeri", { numeri: nums });
});


app.listen(3000, (port) => {
    console.log('Server is running on http://localhost:3000');
  });