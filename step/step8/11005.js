let [N, B] = require('fs').readFileSync('예제.txt').toString().split(" ").map(Number);

let answer = N.toString(Number(B)).toUpperCase();

console.log(answer);