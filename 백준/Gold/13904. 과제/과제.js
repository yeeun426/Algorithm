let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = parseInt(input.shift());
const homework = input.map((str) => str.split(" ").map(Number));

homework.sort((a, b) => b[0] - a[0]);
const visited = new Array(N).fill(false);
let total = 0;

for (let day = homework[0][0]; day > 0; day--) {
  let maxScore = 0;
  let maxIndex = -1;
  for (let i = 0; i < N; i++) {
    if (!visited[i] && homework[i][0] >= day && homework[i][1] > maxScore) {
      maxScore = homework[i][1];
      maxIndex = i;
    }
  }
  if (maxIndex !== -1) {
    total += homework[maxIndex][1];
    visited[maxIndex] = true;
  }
}

console.log(total);
