let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 첫 번째 원소를 뽑아낸다. shift()
// 왼쪽으로 한 칸 이동시킨다 shift() -> push()
// 오른쪽으로 한 칸 이동시킨다 pop() -> unshift()

const [N, M] = input[0].split(" ").map(Number);
let pos = input[1].split(" ").map(Number);
const queue = [];

for (let i = 0; i < N; i++) {
  queue.push(i + 1);
}

let answer = 0;

while (pos.length > 0) {
  let index = queue.indexOf(pos.shift());

  if (index < queue.length / 2) {
    answer += index;
    queue.push(...queue.splice(0, index));
  } else {
    answer += queue.length - index;
    queue.unshift(...queue.splice(index));
  }
  queue.shift();
}

console.log(answer);