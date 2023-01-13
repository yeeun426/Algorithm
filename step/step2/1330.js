let input = require('fs').readFileSync('예제.txt').toString().split(" ")
let [A, B] = input.map(a => Number(a));

if(A > B) {
    console.log(">");
} else if (A < B) {
    console.log("<");
} else {
    console.log("==");
}