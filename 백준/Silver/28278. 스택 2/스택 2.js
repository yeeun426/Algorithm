let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = [];
const answer = [];

for (let i = 0; i < +N; i++) {
  const [command, num] = input[i].split(" ").map(Number);
  switch (command) {
    case 1:
      arr.push(num);
      break;
    case 2:
      answer.push(arr.length > 0 ? arr.pop() : -1);
      break;
    case 3:
      answer.push(arr.length);
      break;
    case 4:
      answer.push(arr.length ? 0 : 1);
      break;
    case 5:
      answer.push(arr.length > 0 ? arr[arr.length - 1] : -1);
      break;
    default:
      break;
  }
}

console.log(answer.join("\n"));
