let [A, B] = require('fs').readFileSync('예제.txt').toString().trim().split("\n").map(Number);
console.log(A * B);
