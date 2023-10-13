let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const areas = [];

for (let i = 0; i < N; i++) {
  areas.push(input[i].split(" ").map(Number));
}

const K = +input[N];
const square = [];

for (let i = 0; i < K; i++) {
  square.push(input[N + 1 + i].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {}
}
