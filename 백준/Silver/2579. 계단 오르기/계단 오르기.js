let stairs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = stairs[0];

const dp = new Array(N + 1).fill(0);

dp[1] = stairs[1]; // 계단이 1개일 때
dp[2] = stairs[1] + stairs[2]; // 계단이 2개일 때
dp[3] = Math.max(stairs[1], stairs[2]) + stairs[3]; // 연속된 3개를 밟을 수 없으므로

// 점화식
// i번째 계단을 밟을 수 있는 경우는 두 가지
// 1. (i-3)번째 계단에서 (i-2)번째 계단을 건너뛰고 (i-1)과 i를 밟는 경우 oxoi
// 점수: dp[i-3] + stairs[i-2] + stairs[i-1]

// 2. (i-2)번째 계단에서 바로 i번째 계단으로 이동하는 경우 oxi
// 점수: dp[i-2] + stairs[i-1]

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 3] + stairs[i - 1] + stairs[i],
    dp[i - 2] + stairs[i],
  );
}

console.log(dp[N]);
