let input = require("fs").readFileSync("예제.txt").toString().split("");

let stack = [];
const bracket = ["()", "[]", "{}"];
let firstOpen = 0;
let lastClose = 0;
let open = true;

for (let j = 0; j < bracket.length; j++) {
  let [open, close] = bracket[j].split("");

  for (let i = 0; i < input.length; i++) {
    if (input[i] === open) {
      stack.push(i);
    } else if (input[i] === close && stack.length > 0) {
      stack.pop();
    } else if (input[i] === close && stack.length <= 0) {
      stack.push(-i);
    }
  }
  console.log(stack);
  if (stack[0] < 0) {
    // ")"
    firstOpen = input.indexOf(open);
    lastClose = -stack[0];
  } else {
    // "("
    firstOpen = stack[0];
    lastClose = input.lastIndexOf(close);
    open = false;
  }
  if (stack.length) break;
}
console.log(firstOpen, lastClose);

let midArr = [];
const openStr = ["(", "[", "{"];
const closeStr = [")", "]", "}"];

let middle = 0;

if
// midArr[0] < 0 && (middle = -midArr[0] - firstOpen - 2);
// console.log(firstOpen, middle, lastClose);

let answer = 0;
if (firstOpen > lastClose) {
  answer = 1;
} else {
  answer = lastClose + 1 - firstOpen - middle;
}

console.log(answer);
