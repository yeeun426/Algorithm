let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const dp = Array(N + 1).fill(1);

const arr = input.slice(0, N).map((line) => line.split(" ").map(Number));
arr.sort((a, b) => a[0] - b[0]);

// 위상정렬
for (const [a, b] of arr) {
  if (dp[b] <= dp[a]) {
    dp[b] = dp[a] + 1;
  }
}

console.log(dp.slice(1, N + 1).join(" "));
