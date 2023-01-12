let input = require('fs').readFileSync('예제.txt').toString().split(" ")
let [A, B] = input.map(a => Number(a));

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));
console.log(A%B);