let input = require('fs').readFileSync('예제.txt').toString().split("\n");
let num = input[1].split(" ").map(Number);

let max = num[0];
let min = num[0];

for(i = 0; i < +input[0] ; i++) {
    if(num[i] > max) {
        max = num[i];
    } else if (num[i] < min) {
        min = num[i];
    }
}

console.log(`${min} ${max}`);
