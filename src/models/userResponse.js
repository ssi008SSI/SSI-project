const mongoose = require("mongoose");
const responseSchema=new mongoose.Schema({
      email:{
          type:String,
          required:true
      },
      useranswer:[
        {
                type: String,
          }
    ],
      correct:{
          type:Boolean,
      },
      essayqid:{
          type:Number
      },
      question:{
        type:String
      },
      userDescription:{
                type: String,
                required: true,
      }
  })
const response = mongoose.model('response',responseSchema);
module.exports = response;