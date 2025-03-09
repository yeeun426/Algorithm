let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < +N; i++) {
  const string = input[i].trim().split("");
  const leftStr = [];
  const rightStr = [];

  for (let j = 0; j < string.length; j++) {
    if (string[j] === "<") {
      if (leftStr.length > 0) {
        rightStr.push(leftStr.pop());
      }
    } else if (string[j] === ">") {
      if (rightStr.length > 0) {
        leftStr.push(rightStr.pop());
      }
    } else if (string[j] === "-") {
      if (leftStr.length > 0) {
        leftStr.pop();
      }
    } else {
      leftStr.push(string[j]);
    }
  }
  console.log(leftStr.join("") + rightStr.reverse().join(""));
}
