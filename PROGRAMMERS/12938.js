function solution(n, s) {
  const element = parseInt(s / n);
  if (!element) return [-1];

  const rest = s % n;
  const answer = new Array(n).fill(element);

  for (let i = 0; i < rest; i++) {
    answer[answer.length - 1 - i]++;
  }
  return answer;
}

// ** key point : 원소의 편차가 가장 적게 분포되어야 곱이 가장 클 수 있다

console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));
console.log(solution(3, 8));
