// 괄호 -> 스택 사용
function solution(s) {
  var answer = 0;
  let isCorrect = true;
  const stack = [];

  if (s.length % 2 === 1) return 0;

  for (let i = 0; i < s.length; i++) {
    let string = s.slice(i) + s.slice(0, i);
    isCorrect = true;

    for (n of string) {
      if (n === "[" || n === "{" || n === "(") {
        stack.push(n);
      } else {
        let topStr = stack.pop();
        if (topStr === "[" && n === "]") continue;
        if (topStr === "{" && n === "}") continue;
        if (topStr === "(" && n === ")") continue;

        isCorrect = false;
        break;
      }
    }
    if (isCorrect) answer++;
  }
  return answer;
}

console.log(solution("}]()[{"));
