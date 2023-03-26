let input = require('fs').readFileSync('예제.txt').toString().split("\n").map((e) => e.split(""));
var answer = [];

for(let i = 0 ; i < 15 ; i++) {
    for(let j = 0 ; j < 5 ; j++) {
        {input[j][i] !== '\r' ? answer.push(input[j][i]) : ""};
    }
}
console.log(answer.join(""));