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