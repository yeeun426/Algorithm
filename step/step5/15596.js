let input = require('fs').readFileSync('예제.txt').toString().trim();
let N = Number(input);

function solution(n) {
    let count = 0;

    for(i = 1 ; i < n+1 ; i++) {
        if (i < 100) {
            count++;
        } else {
            let strArr = i.toString().split("").map(Number);
            let A = strArr[0] - strArr[1];
            let B = strArr[1] - strArr[2];

            if (A == B) {
                count++;
            }
        }
    }
    return count
}

console.log(solution(N));