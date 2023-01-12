let input = require('fs').readFileSync('예제.txt').toString().split(" ");
let [A, B, C] = input.map(Number);

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log( (A*B)%C );
console.log(((A%C) * (B%C))%C);
