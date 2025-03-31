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
dp[3] = Math.max(stairs[1], stairs[2]) + stairs[3]; // 연속된 3개 밟을 수 없음

// 마지막 칸을 무조건 밟아야함
// 마지막 칸이 10칸인 경우
// 7 => 9 => 10 : (target - 3) + (target - 1) + target oxoi
// ? => 8 => 10 : (target - 2) + target oxi

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 3] + stairs[i - 1] + stairs[i],
    dp[i - 2] + stairs[i],
  );
}

console.log(dp[N]);
