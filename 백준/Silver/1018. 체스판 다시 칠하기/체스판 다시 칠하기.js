let [size, ...board] = require('fs').readFileSync('/dev/stdin').toString().split("\n");
[N, M] = size.split(" ").map(Number);
board = board.map(str => str.trim().split(""));

const answer = [];
const lines = ["WBWBWBWB", "BWBWBWBW"];

// i = x축 - 8
// j = y축 - 8
for(let i = 0 ; i <= N-8 ; i++) {
    for(let j = 0 ; j <= M-8 ; j++) {

        // 두 개의 경우(WB, BW)
        for(let z = 0 ; z < 2 ; z++) {
            let count = 0;
            // 8*8 정사각형을 도는 for문
            for(let x = 0 ; x < 8 ; x++) {
                for(let y = 0 ; y < 8 ; y++) {
                    const current = board[i+x][j+y];
                    if(current !== lines[(x+z) % 2][y]) count++;
                }
            }
            answer.push(count);
        }
    }
}
// console.log(answer);
console.log(Math.min(...answer));