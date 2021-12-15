
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rahul:rahul2018$$$$$@cluster0.nderl.mongodb.net/mernstack?retryWrites=true&w=majority"
,{useUnifiedTopology:true})                 
.then(()=>{console.log(`connection sucessfully established`);
}).catch((err)=>{
    console.log(err);
})