const mongoose = require('mongoose')
// creating schema for storing data
const questionSchema=new mongoose.Schema({
    description: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
          }
    ],
    isCorrect: {
        type: String,
        required: true,
    },
    problem:String,
    desc:String
})
// ends here

// creating new collection
const User = mongoose.model('questions',questionSchema);
module.exports = User;