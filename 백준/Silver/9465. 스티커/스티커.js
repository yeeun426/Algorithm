let stickers = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = +stickers.shift();

for (let i = 0; i < T; i++) {
  const n = +stickers.shift();
  const line1 = stickers.shift().split(" ").map(Number);
  const line2 = stickers.shift().split(" ").map(Number);

  const dp = [[0, line1[0], line2[0]]];

  for (let j = 1; j < n; j++) {
    dp[j] = [
      Math.max(...dp[j - 1]),
      Math.max(dp[j - 1][0], dp[j - 1][2]) + line1[j],
      Math.max(dp[j - 1][0], dp[j - 1][1]) + line2[j],
    ];
  }

  console.log(Math.max(...dp[n - 1]));
}
