let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const dp = Array(N + 1).fill(1);
const arr = [];

// 위상정렬
for (let i = 0; i < M; i++) {
  const [pre, sub] = input[i].split(" ").map(Number);
  arr.push([pre, sub]);
}

arr.sort((a, b) => a[0] - b[0]);

for (const [a, b] of arr) {
  if (dp[b] <= dp[a]) {
    dp[b] = dp[a] + 1;
  }
}

console.log(dp.slice(1, N + 1).join(" "));
