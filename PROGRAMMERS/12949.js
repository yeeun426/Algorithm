function solution(arr1, arr2) {
  const answer = new Array(arr1.length).fill(null).map(() => []);

  for (let i = 0; i < arr1.length; i++) {
    let sum = 0;
    let multifly = 0;

    for (let j = 0; j < arr2[0].length; j++) {
      for (let n = 0; n < arr1[0].length; n++) {
        multifly = arr1[i][n] * arr2[n][j];
        sum += multifly;
      }
      answer[i].push(sum);
      sum = 0;
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 1],
    ],
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
    ],
  ),
);
