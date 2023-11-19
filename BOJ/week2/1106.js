let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

// C명 늘이기 위해 투자햐야되는 돈의 최솟값
// N : 도시개수
// 비용 , 고객수

const [C, N] = input.shift().split(" ").map(Number);
const priceList = input.map((i) => i.split(" ").map(Number));

const sortList = priceList.sort((a, b) => a[0] - b[0]);
const dp = Array(100 + C).fill(100 * 1000);
dp[0] = 0;

for (let i = 0; i < N; i++) {
  let [cost, customer] = sortList[i];
  if (dp[customer] > cost) dp[customer] = cost;

  for (let j = 0; j <= C; j++) {
    dp[j] =
      j < customer
        ? Math.min(dp[j], cost)
        : Math.min(dp[j], dp[customer] + dp[j - customer]);
  }
}

console.log(dp[C]);
