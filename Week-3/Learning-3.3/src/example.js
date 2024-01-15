const express = require("express");
const app = express();

app.use(express.json());
app.use(isOldEnoughMiddleware);

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;

    if(age >= 14){
        next();
    }
    else{
        res.json({
            msg: "Sorry you are not allowed"
        });
    }
}

app.get("/ride1", isOldEnoughMiddleware,function(req, res){
    res.json({
        msg: "You have successfully ridden the ride"
    })
});

app.listen(3000);