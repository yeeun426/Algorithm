function solution(arr1, arr2) {
  const answer = new Array(arr1.length).fill(null).map(() => []);

  for (let i = 0; i < arr1.length; i++) {
    let sum = 0;
    let test = 0;

    for (let j = 0; j < arr2[0].length; j++) {
      for (let n = 0; n < arr1[0].length; n++) {
        test = arr1[i][n] * arr2[n][j];
        sum += test;
      }
      answer[i].push(sum);
      sum = 0;
    }
  }

  return answer;
}