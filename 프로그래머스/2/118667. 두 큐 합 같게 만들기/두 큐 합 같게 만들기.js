function solution(queue1, queue2) {
  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);
  const totalSum = sum1 + sum2;

  if (totalSum % 2 !== 0) return -1;
  const target = totalSum / 2;

  let sumQueue = [...queue1, ...queue2];
  let left = 0;
  let right = queue1.length;
  let answer = 0;

  while (left < sumQueue.length && right < sumQueue.length) {
    if (sum1 === target) return answer;

    if (sum1 > target) {
      sum1 -= sumQueue[left];
      left++;
    } else {
      sum1 += sumQueue[right];
      right++;
    }
    answer++;
  }
  return -1;
}
