const { argv } = require('node:process');

let arrLenght = 0;

while (argv[arrLenght] !== undefined) {
    arrLenght++;
}

if (arrLenght < 2) {
    console.log("No argument");
} else {
    console.log(argv[2])
}