let [N, ...input] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < +N; i++) {
  const stack = [];
  const strArr = input[i];
  if (strArr[0] == ")") {
    console.log("NO");
    continue;
  }

  for (let j = 0; j < input[i].length; j++) {
    if (strArr[j] == "(") {
      stack.push("(");
    } else if (strArr[j] == ")" && stack.length > 0) {
      stack.pop();
    } else {
      stack.push(strArr[j]);
      break;
    }
  }
  console.log(stack.length > 0 ? "No" : "Yes");
}
