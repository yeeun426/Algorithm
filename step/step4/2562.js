let input = require('fs').readFileSync('예제.txt').toString().split("\n").map(Number);

let max = input[0];
let idx = 0;

for(i = 0; i < input.length ; i++) {
    if(input[i] > max) {
        max = input[i];
        idx = i;
    }
}

console.log(max);
console.log(idx+1);

// [다른 풀이]
// let max = Math.max(...input)
// console.log(max)
// console.log(input.indexOf(max) + 1)