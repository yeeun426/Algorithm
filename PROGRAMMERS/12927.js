function solution(n, works) {
  if (works.reduce((a, b) => a + b) <= n) return 0;
  works.sort((a, b) => b - a);

  while (n > 0) {
    works[0]--;
    n--;

    for (let i = 0; i < works.length - 1; i++) {
      if (works[i] < works[i + 1]) {
        [works[i], works[i + 1]] = [works[i + 1], works[i]];
      } else {
        break;
      }
    }
  }

  return works.reduce((prev, curr) => prev + curr ** 2, 0);
}

console.log(solution(4, [4, 3, 3]));
console.log(solution(1, [2, 1, 2]));
console.log(solution(3, [1, 1]));
