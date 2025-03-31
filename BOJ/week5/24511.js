let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const A_arr = input[1].split(" ").map(Number);
const B_arr = input[2].split(" ").map(Number);
const M = Number(input[3]);
const C_arr = input[4].split(" ").map(Number);

// 큐는 FIFO
// 스택은 LIFO

// queue 자료구조에 들어있는 건 1, 4이다.
// queue1: [1]에 2를 넣어 pop된 값 -> 1
// queue2: [4]에 넣는다고 하면, 당연히 4가 return
// 그렇게 되면 queue1 = [2], queue2 = [1]
// 기존 queue에 들어있는 값들이 전부 나오면 입력 값이 들어간 순서대로 pop될 것이다.
// 그러면 기존 queue에 들어있는 값은 어떤 순서로 나오는 것인지만 생각하면 된다.
// 가장 마지막에 있는 queue부터 pop되는 것을 알 수 있다.

const queue = [];

for (let i = 0; i < N; i++) {
  if (A_arr[i] == 0) queue.push(B_arr[i]);
}

queue.reverse();

for (let i = 0; i < M; i++) {
  queue.push(C_arr[i]);
}

console.log(queue.slice(0, M).join(" "));
