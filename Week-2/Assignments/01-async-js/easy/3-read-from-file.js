// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

fs.readFile("assign3.txt", "utf-8", (err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

let sum = 0;
const date = new Date();
let start_time = date.getTime();
for(let i = 0; i < 10000000000; i++){
    sum = sum + i;
}
const date1 = new Date();
let stop_time = date1.getTime();
console.log(sum);
console.log((stop_time - start_time)/1000);