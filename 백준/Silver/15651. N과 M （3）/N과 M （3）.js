let [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let s = [];
let result = [];

function dfs() {
  if (s.length === M) {
    result.push(s.join(" ") + "\n");
    return;
  }

  for (let i = 1; i <= N; i++) {
    s.push(i);
    dfs();
    s.pop();
  }
}

dfs();
console.log(result.join(""));
