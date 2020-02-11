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

module.exports = {getAllAudiobooks};