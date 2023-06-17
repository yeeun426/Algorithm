let input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map(Number);

const n = 1000001;
const table = Array(n).fill(1);

// 소수가 아닌 모든 홀수 처리
for (let i = 2 ; i <= Math.ceil(Math.sqrt(n)) ; i++) {
    for(let j = i ** 2 ; j <= n ; j+=i) {
        table[j] = 0;
    }
}

const result = [];

for(let k = 0 ; k < input.length ; k++) {
    if(!input[k]) break; // 0이면 끝내기

    let exist = false;
    for(let i = 3 ; i <= parseInt(input[k]/2) ; i+=2) {
        if(table[i] && table[input[k]-i]) {
            result.push(`${input[k]} = ${i} + ${input[k] - i}`);
            exist = true;
            break;
        }
    }
    if (!exist) result.push("Goldbach's conjecture is wrong.");
}

console.log(result.join("\n"));