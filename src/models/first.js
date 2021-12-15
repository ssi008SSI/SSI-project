const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Question: {
        type: String,
        required: true
    },
    Option1:
    {
        type: String,
        required: true,
        // unique: true
    },
    Option2: {
        type: String,
        required: true
    },

    Option3: {
        type: String,
        required: true
    },

    Option4: {
        type: String,
        required: true
    },
    IsCorrect: {
        type: String,
        required: true,
    }
})

const Userdb = mongoose.model('FIRST', schema);
module.exports = Userdb;