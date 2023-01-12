let input = require('fs').readFileSync('예제.txt').toString().split(" ")
let [A, B] = input.map(a => Number(a));

console.log(A*B);