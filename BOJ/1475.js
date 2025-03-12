let N = require("fs").readFileSync("예제.txt").toString().trim().split("");
const cntArr = new Array(10).fill(0);

for (let i = 0; i < N.length; i++) {
  cntArr[N[i]]++;
}

cntArr[9] = Math.round((cntArr[9] + cntArr[6]) / 2);
cntArr[6] = 0;

console.log(Math.max(...cntArr));
