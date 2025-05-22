const { argv } = require('node:process');

function add(a, b) {
    
    // conversion value
    let testValue = 1;

    // check for integer and print C is fun.
    if ((argv.length < 3) || ((a * testValue) != a) || ((b * testValue) != b)) {
        console.log(NaN);
    } else {
        console.log(Number(a) + Number(b));
    }
}

add(argv[2], argv[3]);

