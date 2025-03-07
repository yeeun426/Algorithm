function solution(weights) {
  let answer = 0;
  const map = new Map();
  const ratio = [1, 2 / 3, 2 / 4, 3 / 4];

  weights.sort((a, b) => a - b); // 오름차순
  weights.forEach((value) => {
    ratio.forEach((cal) => {
      if (map.has(value * cal)) {
        answer += map.get(value * cal);
      }
    });

    map.set(value, (map.get(value) || 0) + 1);
  });
  return answer;
}