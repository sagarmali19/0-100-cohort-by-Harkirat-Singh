// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
let data = "Writing data from assignment4";

fs.writeFile("assign4.txt", data, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Written in file");
    }
});