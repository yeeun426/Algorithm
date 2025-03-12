let [N, K] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let peopleArr = Array.from({ length: N }, (v, i) => i + 1);
let result = [];
let index = 0;

// 1 2 3 4 5 6 7 1 2 3 4 5 6 7
while (peopleArr.length > 0) {
  index = (index + K - 1) % peopleArr.length; // k-1번째 이동 -> people 수로 나눔
  result.push(peopleArr.splice(index, 1)[0]); // index 위치에 있는 값을 제거하고 result 배열에 추가
}

console.log(`<${result.join(", ")}>`);
