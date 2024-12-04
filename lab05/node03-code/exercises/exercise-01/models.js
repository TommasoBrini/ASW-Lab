const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/exercise01');

const userSchema = new mongoose.Schema({
    // TODO: add the user schema
});

const articleSchema = new mongoose.Schema({
    // TODO: add the article schema
});

const commentSchema = new mongoose.Schema({
    // TODO: add the comment schema
});

// TODO: compile the schemas into models

module.exports = { User, Article, Comment };
