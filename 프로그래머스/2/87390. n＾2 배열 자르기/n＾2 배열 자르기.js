function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    let num = Math.max(parseInt(i / n), i % n) + 1;
    answer.push(num);
  }
  return answer;
}