const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const albumSheema = new mongoose.Schema({
    idalbum: {
        type: String,
        unique: true
    },
    name: String,
    date: Date,
    singer: {
        type: Schema.Types.ObjectId,
        ref: 'singers'
    }
})
module.exports = mongoose.model('albums', albumSheema)