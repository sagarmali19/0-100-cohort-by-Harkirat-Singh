// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. 
// There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function increaseCounter(){
    counter++;
    console.log(counter);
    setTimeout(increaseCounter, 1000);
}

increaseCounter();
