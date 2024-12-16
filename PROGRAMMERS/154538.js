function solution(x, y, n) {
  var answer = -1;
  var count = 0;

  function dfs(x, count) {
    if (x === y) {
      if (answer === -1) {
        answer = count;
      } else if (answer > count) {
        answer = count;
      }
      return;
    } else if (x > y) return;
    else {
      dfs(x * 2, count + 1);
      dfs(x * 3, count + 1);
      dfs(x + n, count + 1);
    }
  }
  dfs(x, count);
  return answer;
}

console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));
