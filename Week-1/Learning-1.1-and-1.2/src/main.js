console.log("Hello World");
// output :
// > node main.js
// Hello World

console.log(a);
// output :
// > node main.js
// Hello World
// /Users/sagarmali/0-100-cohort-by-Harkirat-Singh/Week-1/first-node-project/main.js:2
// console.log(a);
//             ^
// ReferenceError: a is not defined
//     at Object.<anonymous> (/Users/sagarmali/0-100-cohort-by-Harkirat-Singh/Week-1/first-node-project/main.js:2:13)
//     at Module._compile (node:internal/modules/cjs/loader:1241:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
//     at Module.load (node:internal/modules/cjs/loader:1091:32)
//     at Module._load (node:internal/modules/cjs/loader:938:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47
// Node.js v20.9.0

var a = 1;
console.log(a);

a = 2;
console.log(a);

let b = 3;
console.log(b);

console.log("Sagar Mali");

const c = 3;
// c = 4;
console.log(c);
// output :
// c = 4;
//   ^
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/Users/sagarmali/0-100-cohort-by-Harkirat-Singh/Week-1/first-node-project/main.js:35:3)
//     at Module._compile (node:internal/modules/cjs/loader:1241:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
//     at Module.load (node:internal/modules/cjs/loader:1091:32)
//     at Module._load (node:internal/modules/cjs/loader:938:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47
// Node.js v20.9.0

console.log("Value of a is : " + a + " Value of b is : " + b);

let firstName = "Sagar";
let isMarried = true;

// if-else conditionals
if(isMarried == true){
    console.log(firstName + " is married.")
}
else{
    console.log(firstName + " is not married.")
}

// for loop
let answer = 0;
for(let i = 1; i <= 100; i = i + 1){
    answer = answer + i;
}
console.log(answer);

// Arrays
const personArray = ["Sagar", "Harshal", "Sam", "Priya"];
console.log(personArray[0]);

const ages = ["21", "22", "23", "24", "25"];
for(let i = 0; i <= ages.length; i++){
    if(ages[i] % 2 == 0){
        console.log(ages[i]);
    }
}

// Print names of only males
const genderArray = ["Male", "Male", "Female", "Female"];
for(let i = 0; i < personArray.length; i++){
    if(genderArray[i] == "Male"){
        console.log(personArray[i]);
    }
}

//complex object
const user1 = {
    firstName : "Swapnil",
    gender : "Male"
}
console.log(user1["firstName"]);

const users = [{
    firstName : "Yash",
    gender : "Male"
}, {
    firstName : "Rohit",
    gender : "Male"
}, {
    firstName : "Ishika",
    gender : "Female"
}
]

for(let i = 0; i < users.length; i++){
    if(users[i]["gender"] == "Male"){
        console.log(users[i]["firstName"]);
    }
}

// function
function sum(a, b){
    console.log("Performing Sum of two numbers : ");
    return a + b;
}
const value = sum(1, 2);
console.log("Sum is : " + value);

function displayResult(data){
    console.log("Result of Sum is : " + data);
}

function displayResultPassive(data){
    console.log("Sum as per result is : " + data);
}

const ans = sum(1,2);
displayResult(ans);

// How will you able to print the sum using one function only ? 
function sumUsingCallbacks(a, b, fnToCall){
    let result = a + b;
    fnToCall(result);
}

// This is called as -> Function Callback
const answer1 = sumUsingCallbacks(1,2,displayResultPassive);

// Another example for it :
function greet(){
    console.log("Hello")
}

setTimeout(greet, 2*1000); // first argument is callback to another function










