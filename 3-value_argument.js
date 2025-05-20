const { argv } = require('node:process');

let arrLenght = 0;

while (argv[arrLenght] !== undefined) {
    arrLenght++;
}

if (arrLenght < 3) {
    console.log("No argument");
} else  if (arrLenght == 3){
    console.log("HBTN");
} else if (arrLenght == 4) {
    console.log("HBTN cool");
}