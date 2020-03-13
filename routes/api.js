var express = require('express');
var router = express.Router();
const DAL = require('../Controller/dataAccessLayer')

/* GET home page. */
router.get('/books', function(req, res) {
  DAL.getAllAudiobooks(req, res)
});

router.get('/books/:id', function(req, res) {
  DAL.getBooks(req, res)
});

router.put('/books/:id', function(req, res) {
  DAL.updateBooks(req, res)
});

router.delete('/books/:id', function(req, res) {
  DAL.deleteBooks(req, res);
});

router.post('/books', function(req, res) {
  DAL.addBooks(req, res)
});


module.exports = router;