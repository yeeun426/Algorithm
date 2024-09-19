function solution(n, a, b) {
  var answer = 1;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return --answer;
}