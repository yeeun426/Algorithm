let [T, ...testcase] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const memo = [0];
memo[1] = 1;
memo[2] = 2;
memo[3] = 4;

for (let i = 4; i < 11; i++) {
  memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
}

for (let i = 0; i < T; i++) {
  console.log(memo[testcase[i]]);
}
