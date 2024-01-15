const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sagarmaliwork:D3KdpoPQgWLcn1ln@cluster0.55uodyw.mongodb.net/');

const User = mongoose.model('Users', { name: String, email:String, password: String });

// const user = new User({ name: 'Sagar', email:'sagarmali@gmail.com', password:'123'});
// user.save();

app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});
    // CRUD methods
    if(existingUser){
        return res.tatus(400).send("Username already exists");
    }

    const user = new User({
        name: "Samruddhi",
        email: "sam@gmail.com",
        password: "12344"
    });

    user.save();
    res.json({
        msg: "User created in mongodb successfully"
    });
})
app.listen(3000);