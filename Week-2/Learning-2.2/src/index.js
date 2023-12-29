const express = require("express");
const app = express();
const port = 3000;

app.get('/', function(req, res){
  res.send('Hello World!');
})

app.post('/conversations', function(req, res){
    console.log(req.headers);
    // Example app listening on port 3000
    // {
    // 'user-agent': 'PostmanRuntime/7.36.0',
    // accept: '*/*',
    // 'postman-token': '38f20272-2971-4c29-8268-ee3ff514b007',
    // host: 'localhost:3000',
    // 'accept-encoding': 'gzip, deflate, br',
    // connection: 'keep-alive',
    // 'content-length': '0'
    // }
    res.send({
        msg: "2 + 2 = 4"
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})