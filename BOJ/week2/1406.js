let [string, M, ...input] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .split("\n");

const leftStr = string.split("");
const rightStr = [];

for (let i = 0; i < +M; i++) {
  const [command, str] = input[i].trim().split(" ");
  if (command == "L" && leftStr.length > 0) {
    rightStr.push(leftStr.pop());
  } else if (command == "D" && rightStr.length > 0) {
    leftStr.push(rightStr.pop());
  } else if (command == "B" && leftStr.length > 0) {
    leftStr.pop();
  } else if (command == "P") {
    leftStr.push(str);
  }
}

console.log([...leftStr, ...rightStr.reverse()].join(""));
