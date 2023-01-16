let input = require('fs').readFileSync('예제.txt').toString().trim();
let sum = 0;

for (i = 0 ; i < Number(input)+1 ; i++) {
    sum += i
}

console.log(sum);