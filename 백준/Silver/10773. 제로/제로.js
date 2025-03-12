let [K, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];
for (let i of input) {
  if (i == 0 && answer.length > 0) {
    answer.pop();
    continue;
  }
  answer.push(i);
}

console.log(answer.length && answer.reduce((acc, cur) => acc + cur));
