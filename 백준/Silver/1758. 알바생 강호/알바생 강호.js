let [n, ...gestList] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

gestList.sort((a, b) => b - a);

let minus = 0;
let result = [];

for (let i = 0; i < n; i++) {
  const tip = gestList[i] - minus;
  if (tip < 0) {
    break;
  }
  minus++;
  result.push(tip);
}

result = result.reduce((pre, cur) => pre + cur);

console.log(result);
