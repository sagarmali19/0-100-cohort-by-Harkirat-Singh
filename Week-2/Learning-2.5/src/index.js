// const express = require("express");
// const app = express();

// function sum(n){
//     let ans = 0;
//     for(let i = 0; i <= n; i++){
//         ans += i;
//     }
//     return ans;
// }


// app.get('/', function(req, res){
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("Hi your ans is : " + ans);
// })

// app.listen(3000);

const express = require("express");
const app = express();

var users = [{
    name: "Sagar",
    kidneys: [{
        healthy: false,
        healthy: true
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i<johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done !"
    })
})

app.put("/", function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res){
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Done"});
})

app.listen(3000);
