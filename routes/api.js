const DAL = require('../Data-Access-Layer/dataAccessLayer');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/books', function(req, res, next) {
  DAL.getAllAudiobooks(req, res);
});

module.exports = router;
