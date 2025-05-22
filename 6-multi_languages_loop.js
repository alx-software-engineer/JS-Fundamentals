const arr = ["C", "fun", "Python", "cool", "JavaScript", "amazing"];

for (let i = 0; i < arr.length; ) {
    console.log(`${arr[i]} is ${arr[i + 1]}`);
    i += 2;
}