let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const N_arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const s = [];
const answer = [];
const used = Array(N).fill(false);

function dfs(depth) {
  if (depth === M) {
    answer.push(s.join(" ") + "\n");
    return;
  }

  let lastUsed = -1;
  for (let i = 0; i < N; i++) {
    if (!used[i] && N_arr[i] !== lastUsed) {
      used[i] = true;
      s.push(N_arr[i]);
      lastUsed = N_arr[i];
      dfs(depth + 1);
      s.pop();
      used[i] = false;
    }
  }
}

dfs(0);
console.log(answer.join("").trim());
