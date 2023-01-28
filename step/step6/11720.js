let input = require('fs').readFileSync('예제.txt').toString().split("\n");
let str = input[1].split("");
let sum = 0;

for(i=0 ; i < str.length ; i++) {
    sum += Number(str[i])
}

console.log(sum);
