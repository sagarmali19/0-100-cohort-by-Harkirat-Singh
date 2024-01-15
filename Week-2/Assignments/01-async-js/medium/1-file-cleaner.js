// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("assign1.txt", "utf-8", (err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        var string = data.toString();
        var newString = string.replace(/\s+/g,' ').trim();
        fs.writeFile("assign1.txt", newString, (err1)=>{
            if(err1){
                console.log(err1);
            }
            else{
                console.log("Done writing in the file.")
            }
        });
    }
});