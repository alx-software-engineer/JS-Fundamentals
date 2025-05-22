const { argv } = require('node:process');

// conversion value
let testValue = 1;

// check for integer and print C is fun.
if ((argv.length < 3) || ((argv[2] * testValue) != argv[2])) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < argv[2]; i++) {
        console.log("C is fun");
    }
}