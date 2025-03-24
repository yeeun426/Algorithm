let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const queue = [];
const answer = [];
let startIdx = 0;

for (let ele of input) {
  let [command, num] = ele.split(" ");
  let queueLen = queue.length - startIdx;

  switch (command) {
    case "push":
      queue.push(+num);
      break;
    case "pop":
      if (queueLen > 0) {
        answer.push(queue[startIdx]);
        startIdx++;
      } else {
        answer.push(-1);
      }
      break;
    case "size":
      answer.push(queueLen);
      break;
    case "empty":
      answer.push(queueLen ? 0 : 1);
      break;
    case "front":
      answer.push(queueLen ? queue[startIdx] : -1);
      break;
    case "back":
      answer.push(queueLen ? queue[queue.length - 1] : -1);
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
