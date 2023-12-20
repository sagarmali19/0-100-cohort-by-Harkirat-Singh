function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    return console.log(findSum(100));
}
  
setTimeout(findSumTill100, 1000)
console.log("hello world");

// hello world
// 4950

// const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function(err, data){
//   console.log(data);
// })
// console.log("Hello there");

//Promises
const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  console.log("Inside kirastsReadFile");
  return new Promise(function(resolve) {
    console.log("Inside Promise");
    fs.readFile("a.txt", "utf-8", function(err, data) {
      console.log("Before resolve");
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);

var d = new Promise(function(onDone){});
console.log(d);

// Example for promise
function kiratAsyncFunction(){
  let p = new Promise(function(resolve){
    setTimeout(resolve, 2000);
  });
  return p;
}

const value = kiratAsyncFunction();
value.then(function(){
  console.log("Hi there");
})