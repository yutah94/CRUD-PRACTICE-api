const mongoose = require('mongoose');

const AudiobookSchema = mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    finished: {type: Boolean, required: true}
})

module.exports = Audiobooks = mongoose.model('Audiobooks', AudiobookSchema, 'Audiobooks');