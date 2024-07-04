let [N, M] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .split(" ")
  .map(Number);

const result = [];

function dfs(start) {
  if (result.length === M) {
    console.log(result.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    if (!result.includes(i)) {
      result.push(i);
      dfs(i + 1);
      result.pop();
    }
  }
}

dfs(1);
