function solution(ingredient) {
  let answer = 0;
  const stack = [];
  const hamburger = [1, 2, 3, 1];

  for (let item of ingredient) {
    stack.push(item);
    if (stack.length >= 4 && stack.slice(-4).join("") === hamburger.join("")) {
      stack.splice(-4, 4);
      answer++;
    }
  }

  return answer;
}

