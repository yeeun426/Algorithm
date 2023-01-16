let input = require('fs').readFileSync('예제.txt').toString().split('\n');

for (i = 1; i < Number(input[0])+1 ; i++) {
    let [A, B] = input[i].split(' ').map(Number);
    console.log(`Case #${i}: ${A+B}`);
}