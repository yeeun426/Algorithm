let N = require("fs").readFileSync("예제.txt").toString().trim().split("");
const numArr = new Array(10).fill(0);

for (let i = 0; i < N.length; i++) {
  numArr[N[i]]++;
}

numArr[9] = Math.round((numArr[9] + numArr[6]) / 2);
numArr[6] = 0;

console.log(Math.roundMath.max(...numArr));
