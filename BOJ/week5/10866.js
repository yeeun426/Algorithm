let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const deque = [];
const answer = [];

for (let input of inputs) {
  let [command, num] = input.split(" ");
  num = Number(num);

  switch (command) {
    case "push_front":
      deque.unshift(num);
      break;
    case "push_back":
      deque.push(+num);
      break;
    case "pop_front":
      answer.push(deque.length ? deque.shift() : -1);
      break;
    case "pop_back":
      answer.push(deque.length ? deque.pop() : -1);
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      answer.push(deque.length == 0 ? 1 : 0);
      break;
    case "front":
      answer.push(deque.length ? deque[0] : -1);
      break;
    case "back":
      answer.push(deque.length ? deque[deque.length - 1] : -1);
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
