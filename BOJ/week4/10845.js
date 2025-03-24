let [N, ...input] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
const queue = [];
const answer = [];

for (let ele of input) {
  let [command, num] = ele.split(" ");
  switch (command) {
    case "push":
      queue.push(+num);
      break;
    case "pop":
      answer.push(queue.length ? queue.shift() : -1);
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      answer.push(queue.length ? 0 : 1);
      break;
    case "front":
      answer.push(queue.length ? queue[0] : -1);
      break;
    case "back":
      answer.push(queue.length ? queue[queue.length - 1] : -1);
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
