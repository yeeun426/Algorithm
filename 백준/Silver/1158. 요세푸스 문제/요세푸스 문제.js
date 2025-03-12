let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let peopleArr = Array.from({ length: N }, (v, i) => i + 1);
let result = [];
let index = 0;

while (peopleArr.length > 0) {
  index = (index + K - 1) % peopleArr.length;
  result.push(peopleArr.splice(index, 1)[0]);
}

console.log(`<${result.join(", ")}>`);
