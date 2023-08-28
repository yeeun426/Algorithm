let stickers = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const T = +stickers.shift();

// 스티커는 2행 n열로 주어짐
// 왼쪽부터 오른쪽으로 스티커를 떼면서 그 값이 최댓값인 것 중 경우의 수

// 위의 스티커를 골랐을 때
// 아래의 스티커 골랐을 때

// 아무것도 고르지 않았을 때 -> 최대값

for(let i = 0 ; i < T ; i++) {
    const n = +stickers.shift();
    const one = stickers.shift().split(" ").map(Number);
    const two = stickers.shift().split(" ").map((v) => parseInt(v));

    const dp = [[0, one[0], two[0]]];

    for(let j = 1 ; j < n ; j++) {
        dp[j] = [
            Math.max(...dp[j-1]),
            Math.max(dp[j-1][0], dp[j-1][2]) + one[j],
            Math.max(dp[j-1][0], dp[j-1][1]) + two[j],
        ];
    }
    console.log(Math.max(...dp[n-1]));
}
// console.log(input);