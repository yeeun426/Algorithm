let input = require('fs').readFileSync('예제.txt').toString().trim();
let year = Number(input);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("1");
} else {
    console.log("0");
}