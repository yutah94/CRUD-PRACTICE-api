const mongoose = require('mongoose');
require('dotenv').config();
const Todolist = require('../models/Todolist');
const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 5432;


mongoose.connect(process.env.ATLAS_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true} )
.then(console.log('The connection is good'))
.catch(err => {console.log(err)});

const getAllTodos = (req, res) => {
    Todolist.find({}, (err, todo) => {
        if(err){
            res.status(500).json(err);
        } 
        res.status(200).json(todo);
    })
}

const getTodos = (req, res) => {
    Todolist.findById(req.params.id, (err, todo) => {
        if(err){
            res.status(500).json(err);
        } 
        res.status(200).json(todo);
    })
}

const updateTodos = (req, res) => {
    TodoList.findByIdAndUpdate(req.params.id, req.body) 
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

const deleteTodos = (req, res) => {
    console.log('Delete id: ', req.params.id)
    Todolist.findByIdAndDelete(req.params.id, (err, todo) => {
        if(err){
            res.status(500).json(err);
        } 
        res.status(200).json(todo);
    })
}

const addTodos = (req, res) => { 
    const newTodolist = new Todolist({
        todos: `${req.body.todos}`,
        responsible: `${req.body.responsible}`
    });
        
    newTodolist.save()
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
}

/* GET api/register */
// router.get('/', function(req, res, next) {
//   res.status(503).send("Oh noes! You sent a GET request - please send your request as a POST request. K Thx Bye!");
// });

// app.listen(PORT, function() {
//     console.log("Server is running on port:", PORT)
// })


module.exports = {getAllTodos, addTodos, getTodos, updateTodos, deleteTodos};