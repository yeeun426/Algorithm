function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length; // 4

  function dfs(count, sum) {
    // numbers = [4, 1, 2, 1]
    console.log(count, sum); // target = 4
    if (count === length) {
      // count = 0
      if (target === sum) {
        // sum = 0
        answer++;
      }
      return;
    }
    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }
  dfs(0, 0);
  return answer;
}

console.log(solution([4, 1, 2, 1], 4));
