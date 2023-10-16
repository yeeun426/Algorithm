let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const dp = input.slice(0, N).map((line) => line.split(" ").map(Number));

// 열 별로 합 누적시키기
for (let i = 1; i < N; i++) {
  for (let j = 0; j < M; j++) {
    dp[i][j] += dp[i - 1][j];
  }
}

// 범위 계산
for (let i = N + 1; i < input.length; i++) {
  const [fromX, fromY, toX, toY] = input[i].split(" ").map(Number);
  let ans = dp[toX - 1]
    .slice(fromY - 1, toY)
    .reduce((acc, val) => acc + val, 0);
  // 시작 위치가 첫번째 행이 아닌 경우 이전 행의 합 빼줌
  if (fromX > 1) {
    ans -= dp[fromX - 2]
      .slice(fromY - 1, toY)
      .reduce((acc, val) => acc + val, 0);
  }
  console.log(ans);
}
