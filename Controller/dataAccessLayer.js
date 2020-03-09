const mongoose = require('mongoose');
require('dotenv').config();
const Audiobooks = require('../models/Audiobooks');

mongoose.connect(process.env.ATLAS_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true} )
.then(console.log('The connection is good'))
.catch(err => {console.log(err)});

const getAllAudiobooks = (req, res) => {
    Audiobooks.find({}, (err, book) => {
        if(err){
            res.status(500).json(err);
        } 
        res.status(200).json(book);
    })
}

const getBooks = (req, res) => {
    Audiobooks.findById(req.params.id, (err, book) => {
        if(err){
            res.status(500).json(err);
        } 
        res.status(200).json(book);
    })
}

const updateBooks = (req, res) => {
    Audiobooks.findByIdAndUpdate(req.params.id, req.body) 
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

const deleteBooks = (req, res) => {
    Audiobooks.findByIdAndDelete(req.params.id, (err, book) => {
        if(err){
            res.status(500).json(err);
        } 
        res.status(200).json(book);
    })
}

const addBooks = (req, res) => { 
    const newAudiobooks = new Audiobooks({
        author: `${req.body.author}`,
        title: `${req.body.title}`
    });
        
    newAudiobooks.save()
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


module.exports = {getAllAudiobooks, addBooks};
module.exports = {getBooks};
module.exports = {updateBooks};
module.exports = {deleteBooks};