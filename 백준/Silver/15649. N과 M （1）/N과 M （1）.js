let [n, m] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

const stacks = [];
function dfs() {
  if (stacks.length === m) {
    console.log(stacks.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!stacks.includes(i)) {
      stacks.push(i);
      dfs();
      stacks.pop();
    }
  }
}
dfs();
