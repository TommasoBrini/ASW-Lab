const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/asw', (req, res) => {
  res.send('asw');
});

// example 5.1
const data = require('./colors.json');
app.get('/colors', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
  // res.json(data);
});

// example 5.2
const path = require('path');
app.get('/contacts', (req, res) => {
  res.sendFile(path.join(__dirname, 'contacts.html'));
});

// example 5.2 bis
app.use(express.static(path.join(__dirname, 'public')));

// example 5.3
app.get('/sayhello/:name', (req, res) => {
  res.send("Hello " + req.params.name + "!");
});

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(404);
  res.send('Page not found');
});

app.listen(3000, (port) => {
  console.log('Server is running on http://localhost:3000');
});
