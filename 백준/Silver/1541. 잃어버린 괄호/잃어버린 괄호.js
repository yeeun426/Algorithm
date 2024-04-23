let fs = require("fs");
let expression = fs.readFileSync("/dev/stdin").toString().trim().split("-");
const N = expression.length;
let answer = 0;
let sum = 0;
for (let i = 0; i < N; i++) {
  expression[i] = expression[i].split("+");
  for (let j = 0; j < expression[i].length; j++) {
    expression[i][j] = Number(expression[i][j]);
    sum += expression[i][j];
  }
  expression[i] = sum;
  sum = 0;
}
answer += expression[0];
for (let i = 1; i < N; i++) {
  answer -= expression[i];
}
console.log(answer);