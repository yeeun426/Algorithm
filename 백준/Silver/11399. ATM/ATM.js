let [N, time] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const sortTime = time
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let answer = sortTime[0];
const need = [sortTime[0]];

for (let i = 1; i < N; i++) {
  need.push(need[i - 1] + sortTime[i]);
  answer += need[i];
}

console.log(answer);
