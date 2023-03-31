let [A, B] = require('fs').readFileSync('예제.txt').toString().split(" ").map(BigInt);
console.log((A+B).toString());