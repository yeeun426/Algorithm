let [N, ...scores] = require('fs').readFileSync('예제.txt').toString().split("\n").map(Number);

// 마지막 칸을 무조건 밟아야함
// 마지막 칸이 10칸인 경우
// 7 => 9 => 10 : (target - 3) + (target - 1) + target
// ? => 8 => 10 : (target - 2) + target

const dp = new Array(N).fill(0);
dp[0] = scores[0];
dp[1] = scores[0] + scores[1];
dp[2] = Math.max(scores[0], scores[1]) + scores[2];

for(let i = 3 ; i < N ; i++) {
    dp[i] = Math.max(dp[i-2] + scores[i], dp[i-3] + scores[i - 1] + scores[i]);
}

console.log(dp);
console.log(dp[N - 1])

// let maxScores = [];
// let startStairs = 0;

// while(startStairs < 2) {
//     let sum = scores[startStairs];

//     let stairs = [];

//     for(let i = startStairs+1 ; i < N ; i++) {

//         if(stairs[0]+1 === stairs[1] && stairs[1]+1 === stairs[2]) break;
//         if(stairs.length === 3) stairs.shift(); 
                
//         if(scores[i] >= scores[i+1]) {
//             sum += scores[i];
//         } else {
//             sum += scores[i+1];
//             i++;
//         }
//         stairs.push(i);

//         console.log(stairs, i, sum);
//     }
//     maxScores.push(sum);
//     startStairs++;
// }

// console.log(Math.max(...maxScores));
