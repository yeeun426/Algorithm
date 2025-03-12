let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = +input[0];
let a = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let x = +input[2];

let [left, right] = [0, n - 1];
let answer = 0;

while (left < right) {
  if (a[left] + a[right] == x) {
    answer++;
    right--;
    left++;
  } else if (a[left] + a[right] > x) {
    right--;
  } else {
    left++;
  }
}

console.log(answer);
