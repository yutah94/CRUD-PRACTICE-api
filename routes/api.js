var express = require('express');
var router = express.Router();
const DAL = require('../Controller/dataAccessLayer')

/* GET home page. */
router.get('/todos', function(req, res) {
  DAL.getAllTodos(req, res)
});

router.get('/todos/:id', function(req, res) {
  DAL.getTodos(req, res)
});

router.put('/todos/:id', function(req, res) {
  DAL.updateTodos(req, res)
});

router.delete('/todos/:id', function(req, res) {
  DAL.deleteTodos(req, res);
});

router.post('/todos', function(req, res) {
  DAL.addTodos(req, res)
});


module.exports = router;