let [coin, ...value] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [N, K] = coin.split(" ").map(Number);
value = value.map(Number);
let answer = 0;

for (let i = N; i > 0; i--) {
  if (K >= value[i - 1]) {
    answer += parseInt(K / value[i - 1]);
    K %= value[i - 1];
  }

  if (K == 0) break;
}

console.log(answer);
