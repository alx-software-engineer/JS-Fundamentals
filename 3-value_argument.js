const { argv } = require('node:process');

let count = 0;

while (argv[count] !== undefined) {
    count++;
}

if (count < 3) {
    console.log("No argument");
} else {
    console.log(argv[2])
}