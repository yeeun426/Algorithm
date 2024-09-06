function solution(n) {
  const fibArr = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    fibArr.push((fibArr[i - 1] + fibArr[i - 2]) % 1234567);
  }
  return fibArr[n];
}