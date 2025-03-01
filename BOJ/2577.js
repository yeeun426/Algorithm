let [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

// let [a, b, c] = [150, 266, 427];
const number = (a * b * c).toString().split("");
const answer = new Array(10).fill(0);

for (let i = 0; i < number.length; i++) {
  answer[number[i]]++;
}

console.log(answer.join("\n"));
