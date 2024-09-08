function solution(n) {
  var answer = 0;
  const limit = n / 2 + 1;
  for (let i = 1; i < limit; i++) {
    let sum = 0;
    for (let j = i; j < limit; j++) {
      sum += j;
      if (sum > n) break;
      if (sum === n) {
        answer += 1;
        break;
      }
    }
  }
  return n === 1 ? 1 : answer + 1;
}

console.log(solution(15));
