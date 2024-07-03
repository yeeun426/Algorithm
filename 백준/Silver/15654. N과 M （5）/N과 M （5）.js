let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const N_arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const s = [];
const answer = [];

function dfs(start) {
  if (s.length === M) {
    answer.push(s.join(" ") + "\n");
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!s.includes(N_arr[i])) {
      s.push(N_arr[i]);
      dfs(i + 1);
      s.pop();
    }
  }
}

dfs();
console.log(answer.join(""));
