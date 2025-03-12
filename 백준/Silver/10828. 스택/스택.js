let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = [];
const answer = [];

for (let i = 0; i < +N; i++) {
  const [command, num] = input[i].split(" ");
  switch (command) {
    case "push":
      arr.push(+num);
      break;
    case "pop":
      answer.push(arr.length > 0 ? arr.pop() : -1);
      break;
    case "size":
      answer.push(arr.length);
      break;
    case "empty":
      answer.push(arr.length ? 0 : 1);
      break;
    case "top":
      answer.push(arr.length > 0 ? arr[arr.length - 1] : -1);
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"))
