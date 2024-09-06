function solution(n) {
  var answer = 0;
  const fibArr = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibArr.push((fibArr[i - 2] + fibArr[i - 1])%1234567);
  }
  answer = fibArr[n];
  return answer;
}