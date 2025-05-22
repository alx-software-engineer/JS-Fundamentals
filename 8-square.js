const { argv } = require('node:process');

// conversion value
let testValue = 1;

// Check for integer, and print Squares.
if ((argv.length < 3) || (argv[2] * testValue) != argv[2]) {
    console.log("Missing size");
} else {
    for (let i = 0; i < argv[2]; i++) {
        let output = "";
        for (let j = 0; j < argv[2]; j++) {
            output += "X";
        }
        console.log(output);
    }
}