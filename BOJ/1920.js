let [N, A, M, M_arr] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .split("\n");

[N, M] = [Number(N), Number(M)];
A = A.split(" ")
  .map(Number)
  .sort((a, b) => a - b);
M_arr = M_arr.split(" ").map(Number);
const answer = [];

M_arr.forEach((el) => {
  let start = 0;
  let end = N - 1;
  let isNumberInArr = false;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (el > A[mid]) {
      start = mid + 1;
    } else if (el < A[mid]) {
      end = mid - 1;
    } else {
      isNumberInArr = true;
      break;
    }
  }
  if (isNumberInArr) answer.push(1);
  else answer.push(0);
});

console.log(answer.join("\n"));
