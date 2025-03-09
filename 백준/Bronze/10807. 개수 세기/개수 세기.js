let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = input[0];
const numArr = input[1].split(" ").map(Number);
const v = input[2];
let answer = 0;

for (let num of numArr) {
  if (num == v) answer++;
}

console.log(answer);
