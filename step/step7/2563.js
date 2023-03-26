let input = require('fs').readFileSync('예제.txt').toString().split("\n");

let n = +input.shift();
let arr = [];

for(let i = 0 ; i < n ; i++) {
    arr.push(input[i].split(" ").map(Number));
}

let page = Array.from(Array(100), () => Array(100).fill(0));
let cnt = 0;

arr.forEach((v) => {
    let [n, m] = v;
    for (let i = m ; i < m + 10; i++) {
        for(let j = n; j < n + 10 ; j++) {
            if(page[i][j] === 1 || i > 100 || j > 100) continue;
            page[i][j] = 1;
            cnt++;
        }
    }
});

console.log(cnt);
// for ( let i = 0 ; i < +input[0] ; i++ ) {
//     confetti.push(input[i+1].split(" ").map(Number));
// }

// // x 범위가 겹치는지 확인
// // 그 다음 y 범위 겹치면
// // 겹치는 넓이만큼 빼주기
// for (let i = 0 ; i < +input[0] ; i++) {
//     for (let j = i + 1 ; j < +input[0] ; j++) {
//         if(confetti[i][0] + 10 > confetti[j][0] && confetti[i][0] + 10 - confetti[j][0] < 10) {
//             let base = confetti[i][0] + 10 - confetti[j][0];
//             let height = confetti[j][1] + 10 - confetti[i][1];
//             width -= base * height;
//         } 
//     }
// }

// console.log(width);