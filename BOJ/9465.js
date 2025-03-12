let stickers = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const T = +stickers.shift();

// 하나의 열에서 고를 수 있는 가짓수 3가지
//  - 두 개의 행에서 아무것도 안 고를 때
//  - 위의 행을 고를 때
//  - 아래의 행을 고를 때

for (let i = 0; i < T; i++) {
  const n = +stickers.shift();
  const line1 = stickers.shift().split(" ").map(Number);
  const line2 = stickers.shift().split(" ").map(Number);

  const dp = [[0, line1[0], line2[0]]]; // 초기화

  for (let j = 1; j < n; j++) {
    console.log(dp[j - 1]);
    dp[j] = [
      // 그 다음 dp 배열에서 하나의 열에서 고를 수 있는 최대 값
      Math.max(...dp[j - 1]), // 이전 열에서 최대값 (아무것도 고르지 않았으니 최대값)
      Math.max(dp[j - 1][0], dp[j - 1][2]) + line1[j], // 이전 열에서 아무것도 고르지 않은 경우, 이전 열에서 아래의 행을 골랐을 경우 중 최대값
      Math.max(dp[j - 1][0], dp[j - 1][1]) + line2[j], // 이전 열에서 아무것도 고르지 않은 경우 + 이전 열에서 위의 행을 골랐을 경우 중 최대값
    ];
  }

  console.log(Math.max(...dp[n - 1]));
}
