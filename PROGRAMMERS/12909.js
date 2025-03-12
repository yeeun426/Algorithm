function solution(s) {
  const strArr = s.split("");
  const stack = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == "(") {
      stack.push("(");
    } else if (strArr[i] == ")" && stack.length > 0) {
      stack.pop();
    } else {
      stack.push(strArr[i]);
      break;
    }
  }
  console.log(stack.length ? false : true);
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
