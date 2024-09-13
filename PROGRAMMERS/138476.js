function solution(k, tangerine) {
  var answer = 0;
  const num_tangerine = {};
  let sum = 0;

  for (let i = 0; i < tangerine.length; i++) {
    if (num_tangerine[tangerine[i]] > 0) {
      num_tangerine[tangerine[i]]++;
    } else {
      num_tangerine[tangerine[i]] = 1;
    }
  }

  const sortedArray = Object.entries(num_tangerine).sort((a, b) => b[1] - a[1]);
  let index = 0;

  while (sum < k) {
    sum += sortedArray[index][1];
    answer++;
    index++;
  }
  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
