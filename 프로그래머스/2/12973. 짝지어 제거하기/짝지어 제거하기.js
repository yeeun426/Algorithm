function solution(s) {
  s = s.split("");
  const stack = [];
  let i = 0;

  while (i < s.length) {
    if (stack.length === 0) {
      stack.push(s[i]);
      i++;
      continue;
    }
    let top = stack[stack.length - 1];
    if (top === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }

    if (stack.length === 0 && i === s.length - 1) return 1;
    i++;
  }
  return 0;
}
