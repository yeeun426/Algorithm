let input = require('fs').readFileSync('예제.txt').toString().split("\n").map(Number);

console.log(sum(input));

function sum(a) {
    let sum = 0;

    for(i = 0 ; i < input.length ; i++) {
        sum += input[i];
    }
    
    return sum;
}