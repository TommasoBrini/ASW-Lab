const express = require('express');
const bodyParser = require('body-parser');
const { User, Article, Comment } = require('./models');

const app = express();
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    // TODO: implement retrieve all users
});

app.post('/users', (req, res) => {
    // TODO: implement create a new user
});

app.get('/articles', (req, res) => {
    // TODO: implement retrieve all articles
});

app.post('/articles', (req, res) => {
    // TODO: implement create a new article
});

app.get('/comments', (req, res) => {
    // TODO: implement retrieve all comments
});

app.post('/comments', (req, res) => {
    // TODO: implement create a new comment
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
