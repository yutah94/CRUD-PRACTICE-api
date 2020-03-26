const mongoose = require('mongoose');

const TodolistSchema = mongoose.Schema({
    todos: {type: String, required: true},
    responsible: {type: String, required: true}
})

module.exports = Todolist = mongoose.model('Todolist', TodolistSchema, 'Todolist');