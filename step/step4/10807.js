let input = require('fs').readFileSync('예제.txt').toString().split("\n");
let num = input[1].split(" ").map(Number);
let sum = 0;

for(i = 0; i < +input[0]; i++) {
    if(num[i] === +input[2]) {
        sum += 1;
    }    
}

console.log(sum);