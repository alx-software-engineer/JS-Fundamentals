const { argv } = require('node:process');

// conversion value
let testValue = 1;

// check for integer.
if (argv.length < 3) {
    console.log("Not a number");
} else if ((argv[2] * testValue) != argv[2]) {
    console.log("Not a number");
} else {
    console.log(`My number: ${Math.floor(argv[2])}`);
}