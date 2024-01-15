const express = require("express");
const app = express();

let numberOfRequests = 0;
function calculateNoRequests(req, res, next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

function usernameMiddleware(req, res, next){
    if(req.headers.username != "Sagar" || req.headers.password != "pass"){
        res.status(403)({
            msg: "Incorrect inputs"
        });
    }
    else{
        next();
    }
}

function kidneyMiddleware(req, res, next){
    if(req.query.kidneyId != 1 && req.query.kidneyId != 2){
        res.status(403)({
            msg: "Incorrect inputs"
        });
    }
    else{
        next();
    }
}

app.use(calculateNoRequests);
// app.use(express.json());

app.get("/health-checkup", usernameMiddleware, kidneyMiddleware, function(req, res){
    // do something here
    res.send("Your kidney is fine");
})

app.post("/health-checkup", usernameMiddleware, kidneyMiddleware, function(req, res){
    res.json({
        msg: "Hi in post method"
    })
})

app.listen(3000);