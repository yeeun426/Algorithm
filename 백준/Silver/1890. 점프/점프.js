let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 1. 아래칸에 더했을 때
//   games[0+2][0] -> plus = 1
//     games[2+plus][0] -> plus = 3
//       games[3][0+plus] -> 0
//       games[3+plus] --------------> 길이 초과
//     games[2][0+plus] -> plus = 2
//       games[2][1+plus] -> 1
//       games[2+plus][3] -> 0
// 2. 오른칸에 더했을  때
//   games[0][0+2] -> 3
//     games[0+plus][2] -> 1
//     games[3][2+plus] -> 0
// console.log(games[0][1]);

// 경로의 개수가 2^63-1 보다 작거나 같으므로 bigInt사용
const games = [];
const dp = Array.from(Array(+N), () => Array(+N).fill(BigInt(0)));
dp[0][0] = BigInt(1);

for (let i = 0; i < N; i++) {
  games.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let num = games[i][j];
    if (num === 0) continue; // num === 0이면 마지막에 도달한 것이므로 for문 나오기
    if (i + games[i][j] < N) {
      dp[i + games[i][j]][j] += dp[i][j];
    }
    if (j + games[i][j] < N) {
      dp[i][j + games[i][j]] += dp[i][j];
    }
  }
}
console.log(dp[N - 1][N - 1].toString());
