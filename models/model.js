const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const dataSheema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    birthdate: {
        required: true,
        type: Date
    },
    albums: [{
        type:  Schema.Types.ObjectId,
        ref: 'albums'
    }]
})

module.exports = mongoose.model('singers', dataSheema)