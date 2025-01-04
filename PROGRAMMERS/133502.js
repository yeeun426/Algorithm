function solution(ingredient) {
  var answer = 0;
  const hamburger = [1, 2, 3, 1];
  const stack = [];

  for (let ingred of ingredient) {
    stack.push(ingred);
    if (stack.length >= 4 && stack.slice(-4).join("") === hamburger.join("")) {
      stack.splice(-4, 4);
      answer++;
    }
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
