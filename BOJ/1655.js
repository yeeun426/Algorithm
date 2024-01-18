let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map(Number);

// 시간 초과
const answer = [];
let order = [];

function insertInOrder(arr, num) {
  let index = arr.length;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > num) {
      arr[i + 1] = arr[i];
      index = i;
    } else {
      break;
    }
  }
  arr[index] = num;
  return arr;
}

for (let i = 0; i < input.length; i++) {
  order = insertInOrder(order, input[i]);

  if (order.length % 2 !== 0) {
    answer.push(order[Math.floor(order.length / 2)]);
  } else if (order.length % 2 === 0) {
    answer.push(order[order.length / 2 - 1]);
  }
}

console.log(answer);
