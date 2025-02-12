function solution(weights) {
  let answer = 0;
  const map = new Map();
  const ratioArr = [1, 2 / 3, 2 / 4, 3 / 4];

  weights.sort((a, b) => a - b); // 오름차순
  weights.forEach((weight) => {
    ratioArr.forEach((ratio) => {
      if (map.has(weight * ratio)) {
        answer += map.get(weight * ratio);
      }
    });
    // 무게 개수 카운팅 (동일한 무게가 있는 경우를 고려)
    map.set(weight, (map.get(weight) || 0) + 1);
  });
  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));
