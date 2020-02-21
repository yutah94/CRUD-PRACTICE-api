var express = require('express');
var router = express.Router();
const DAL = require("../dataAccessLayer/dataAccessLayer")
const Audiobooks = require('../models/Audiobooks')

/* POST api/register */
 router.post('/books', (req, res) => {
   console.log('body:', req.body)
   console.log('params: ', req.params);

   const newAudiobooks = new Audiobooks({
     title: `${req.body.title}`,
     author: `${req.body.author}`,
     finished: `false`
   });

   newAudiobooks.save().then(audiobooks => res.json(audiobooks));
 });

 /* DELETE api/register */
 router.delete('/books/:id', (req, res) => {
  Audiobooks.findById(req.params.id)
    .then(audiobooks => audiobooks.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

/* GET home page. */
router.get('/books', function(req, res) {
  DAL.getAllAudiobooks(req, res)
});

module.exports = router;
