function solution(n) {
  var answer = 0;

  for (let i = 1; i < n; i++) {
    let sum = i;

    for (let j = i + 1; j < n; j++) {
      sum += j;
      if (sum === n) {
        answer+=1;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return answer + 1;
}