let input = require('fs').readFileSync('예제.txt').toString().split("\n");

const [N, K, P, L] = input.shift().split(" ").map(Number);
const roulette = []

for(let n = 0 ; n < K ; n++){
    roulette.push(input[n].split(" ").map(Number));
}

// 라운드 1에서 돌리기
let num = N+1;
// i번째 플레이어
// j번째 라운드
let target = Array(N+1).fill(0);

let player = 0;
let round = 0;

for(let j = 0 ; j < L ; j++) {
    for(let i = 0 ; i < K ; i++) {
        num -= roulette[i][j]
        if(num <= 0) {
            num += N * (Math.ceil(Math.abs(num) / N));  
        }
        if (num === P) {
            player = i+1;
            round = j+1;
            break;
        } 
    }
    if (player !== 0) {
        break;
    }
}

console.log(player != 0 ? `${player} ${round}` : "-1");

