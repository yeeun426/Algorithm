let input = require('fs').readFileSync('예제.txt').toString().split("\n").map(Number);

const n = 1000001;
const table = Array(n).fill(1);

// 소수가 아닌 모든 홀수 처리
// 가장 작은 소수인 3부터 2칸씩 (홀수) 건너뛰며 확인
for (let i = 3 ; i <= Math.ceil(Math.sqrt(n)) ; i+=2) {
    if(table[i]){
        for(let j = i ** 2 ; j <= n ; j+=i) table[j] = 0;
    }
}

const result = [];

for(let k = 0 ; k < input.length ; k++) {
    if(!input[k]) break; // 0이면 끝내기

    let exist = false;

    // 처음 발견되는 것이 가장 차가 큰 수들임
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