let input = require('fs').readFileSync('예제.txt').toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);

let A = [];
let B = [];
let array = [];
for(let i = 0 ; i < N ; i++) {
    array.push([]);
}

for (let i = 0 ; i < N ; i++) {
    A.push(input[i+1].split(" ").map(Number));
    B.push(input[i+1+N].split(" ").map(Number));
}

for(let n = 0 ; n < N ; n++) {
    for(let m = 0 ; m < M ; m++) {
        array[n].push(A[n][m] + B[n][m]);
    }
}

const sol = array.map((e) => e.join(" "));
console.log(sol.join("\n"));