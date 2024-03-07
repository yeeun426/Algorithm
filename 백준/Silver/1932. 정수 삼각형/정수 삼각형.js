let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = input.shift();
const triangle = input.map((num) => num.split(" ").map(Number));

for (let i = n - 1; i >= 0; i--) {
  for (let j = 0; j + 1 < triangle[i].length; j++) {
    triangle[i - 1][j] += Math.max(triangle[i][j], triangle[i][j + 1]);
  }
}

console.log(triangle[0][0]);
