// Question ->
// If running following PerformanceNavigationTiming, why one of the cores 
// is not reaching upto 100%

// The reason why the code you provided is not using 100% of the CPU is because 
// JavaScript is single-threaded and the V8 JavaScript engine has a limit on the amount 
// of work that it can do in a single thread. This limit is in place to prevent the 
// JavaScript engine from taking over too much of the CPU and making the computer 
// unresponsive.
// When the JavaScript engine reaches its limit, it will start to queue up tasks 
// that need to be executed. This means that tasks will not be executed immediately, 
// but will instead wait until the JavaScript engine has some free time. As a result, 
// the code you provided will not use 100% of the CPU because the JavaScript engine is 
// not able to execute all of the tasks in the loop immediately.

let sum = 0;
for(let i = 0; i <= 1000000000000; i++){
    sum = sum + i;
}
console.log(sum);