let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let answer = "";

for(i = 1 ; i < Number(input[0])+1; i++) {
    let [A, B] = input[i].split(' ').map(Number);
    answer += A + B + "\n"
}
console.log(answer);
