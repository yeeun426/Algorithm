let input = +require("fs").readFileSync("예제.txt").toString();
const numArr = [];
let i = 2;

while (i < input) {
  for (let j = 2; j <= i; j++) {
    if (i % j == 0 && i !== j) break;
    if (i == j) numArr.push(i);
  }
  i++;
}

console.log(numArr);
