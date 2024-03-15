let [N, A] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const arr = A.split(" ").map(Number);

const upDP = new Array(N).fill(0);
const downDP = new Array(N).fill(0);

upDP[0] = 1;
downDP[N] = 1;

// 증가 DP
for (let i = 0; i < N; i++) {
  let cnt = 1;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) cnt = Math.max(cnt, upDP[j] + 1);
  }
  upDP[i] = cnt;
}

// 감소 DP
for (let i = N - 1; i >= 0; i--) {
  let cnt = 1;
  for (let j = i + 1; j <= N; j++) {
    if (arr[j] < arr[i]) cnt = Math.max(cnt, downDP[j] + 1);
  }
  downDP[i] = cnt;
}

console.log(Math.max(...upDP.map((el, idx) => el + downDP[idx])) - 1);