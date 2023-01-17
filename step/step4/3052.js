let input = require('fs').readFileSync('예제.txt').toString().split("\n").map(Number);
let answer = [];
for(i = 0 ; i < 10 ; i++) {

    let num = input[i] % 42;

    if(!answer.includes(num)) {
        answer.push(num % 42);
    }
}

console.log(answer.length);