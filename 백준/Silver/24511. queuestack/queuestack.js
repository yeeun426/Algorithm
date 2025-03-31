let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const A_arr = input[1].split(" ").map(Number);
const B_arr = input[2].split(" ").map(Number);
const M = Number(input[3]);
const C_arr = input[4].split(" ").map(Number);

const queue = [];
const answer = [];
for (let i = 0; i < N; i++) {
  if (A_arr[i] == 0) queue.push(B_arr[i]);
}

queue.reverse();

for (let i = 0; i < M; i++) {
  queue.push(C_arr[i]);
}

console.log(queue.slice(0, M).join(" "));
