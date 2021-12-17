const express = require("express");
const bodyParser = require("body-parser")
const path = require("path");
const app = express();
const db= require("./db/conn.js");
const Register = require("./models/registers");
const Response = require("./models/userResponse");
const { Mongoose } = require("mongoose");
const port = process.env.PORT || 3000;
//admin login credentials
const credential = {
    email:"admin@gmail.com",
    password:"admin123"
}
let newUser;
let ans;
// always use double underscore while giving the dirname name path.
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
// this console command is to show the folder,file structure
// console.log(path.join(__dirname,"../public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(static_path));
app.use(express.static(__dirname + '/public'));
app.use('/', require('./server/routes/router'))
app.set('view engine', 'ejs');
app.set("views", template_path);

//POST request for admin login
app.post('/login',(req,res)=>{
    if(req.body.email==credential.email&&req.body.password==credential.password){
        res.redirect('/admin');
    }
    else{
        res.end("invalid Username")
    }
});
app.post('/register', async (req, res) => {
    try {
        const { firstname, myemail, mypassword } = req.body;
        const email=myemail
        const password=mypassword
        console.log(req.body);
        console.log({email, password, firstname});
        const user = await Register.findOne({ email });
        console.log(user);
        if (user != null) {
            console.log("Your response has already been submitted!");
            
        }
        else
        {
         newUser = new Register({ email, password, confirmpassword: password, username: firstname })
        await newUser.save()
        res.redirect('permission')
                app.post('/mcq', async (req, res) => {
                     ans = req.body.ans;
                    console.log({ ans });
                    console.log(req.body.ans);
                    res.redirect("essay")
                });
                app.post('/essay', async (req, res) => {
                        const { essay } = req.body;
                        const newEssay = new Response({ _id: newUser._id, email, useranswer: ans, userDescription: essay });
                        await newEssay.save();
                        db.disconnect();
                        res.redirect('final');
                    });
            }   
    }
    catch (e) { console.error(e); res.json(e) }
})
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})