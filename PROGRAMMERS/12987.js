function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    if (A[i] < B[0]) {
      answer++;
      B.shift();
    } else {
      B.pop();
    }
  }

  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
