const express = require("express");
const app = express();

app.use(express.json())
app.post("/health-checkup", function(req, res){
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    if(!kidneys){
        res.json({
            msg: "wrong inputs"
        })
    }
    else{
        const kidneyLength = kidneys.length;
        res.send("You have " + kidneyLength + " kidneys");
    }
})

// global catches
app.use(function(err, req, res, next){
    res.json({
        msg: "Something going wrong"
    })
})

app.listen(3000);