let input = require('fs').readFileSync('예제.txt').toString().split("\n");
let [N, X] = input[0].split(" ").map(Number);
let A = input[1].split(" ").map(Number);
let answer = [];

for(i = 0; i < N ; i++) {
    if(A[i] < X) {
        answer.push(A[i]);
    }
}

console.log(answer.join(" "));
