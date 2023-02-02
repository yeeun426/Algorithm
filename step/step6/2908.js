let input = require('fs').readFileSync('예제.txt').toString().trim();
let [A, B] = input.split(" ").map(e => e.split(""));

const first = [];
for (i = A.length ; i > 0; i--) {
    first.push(A[i-1]);
}
const second = [];
for (i = B.length ; i > 0; i--) {
    second.push(B[i-1]);
}

A = Number(first.join(""));
B = Number(second.join(""));

console.log(A > B ? A : B);

// 다른 사람 풀이 (간단)
// let input = require('fs').readFileSync('예제.txt').toString().trim();
// let [num1, num2] = input.split(" ").map(e => e.split("").reverse().join(''));
// console.log(+num1 > +num2 ? num1 : num2);