let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
const A = input[1].split(' ').map(Number);
const B = input[3].split(' ').map(Number);
let answer = [];
A.sort((a,b) => a - b);
B.forEach(v => {
    let start = 0;
    let end = A.length - 1;
    let res = false;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (v < A[mid]) { 
            end = mid - 1; 
        } else if (v > A[mid]) { 
            start = mid + 1;
        } else {
            res = true;
            break;
        }
    }
    if (res === true) {
        answer.push(1);
    } else {
        answer.push(0);
    }
})
console.log(answer.join('\n'));