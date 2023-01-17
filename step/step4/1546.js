let input = require('fs').readFileSync('예제.txt').toString().split("\n");
let scores = input[1].split(" ").map(Number);
let M = Math.max(...scores);
let sum = 0;

for(i = 0 ; i < +input[0] ; i++) {
    sum += scores[i] / M * 100;
}

console.log(sum / +input[0]);