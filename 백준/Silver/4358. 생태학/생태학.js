let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const treeMap = new Map();

input = input.map((line) => line.trim()).filter((line) => line !== ""); // 공백 또는 빈 줄 제거
input.sort();

for (let i = 0; i < input.length; i++) {
  treeMap.set(input[i], (treeMap.get(input[i]) || 0) + 1);
}

treeMap.forEach((cnt, tree) => {
  let ratio = (cnt / input.length) * 100;
  console.log(`${tree} ${ratio.toFixed(4)}`);
});
