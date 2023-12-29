function square(n) {
    return n * n;
}
  
function cube(n) {
    return n * n * n;
}
  
function sumOfSquares(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
}

function sumOfCubes(a, b) {
    let cube1 = cube(a);
    let cube2 = cube(b);
    return cube1 + cube2;
}
  
let ans = sumOfSquares(1, 2);
console.log(ans);
// output -> 5
// Problem with this code is -> Do not Repeat Yourself -> Code repitition
// We can define generic function here
// Passing functional argument -> callback function here its is fn.
function SumOfSomething(a, b, fn){
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;
}

let ans1 = SumOfSomething(1, 2, square);
console.log(ans1);

// Async call
function onDone(){
    console.log("Hi there");
}
setTimeout(onDone, 1000);
console.log("After Timeout");
// After Timeout
// Hi there
// It will run After Timeout first and then Hi there because of Async call

// Promises
function myOwnSetTimeout(duration){
    let p = new Promise(function (resolve){
        setTimeout(resolve, 1000);
    });
    return p;
}
myOwnSetTimeout(1000).then(function(){
    console.log("Log the first thing");
})




