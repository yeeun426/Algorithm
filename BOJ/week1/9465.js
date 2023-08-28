let stickers = require('fs').readFileSync('예제.txt').toString().split("\n");
const T = +stickers.shift();

// i는 왼쪽에서 시작해서 오른쪽으로 향하는 방향으로 증가 (i=0; i<n; i++)
// X : 뜯지 않음. O : 뜯음.
// dp[i][0] -> i번째 스티커 위 아래 둘다 안뜯음. X X  -> 그랬을 때 얻은 점수
// dp[i][1] -> i번째 스티커 위꺼만 뜯음. O X  -> 그랬을 때 얻은 점수
// dp[i][2] -> i번째 스티커 아래꺼만 뜯음.X O  -> 그랬을 때 얻은 점수

for(let i = 0 ; i < T ; i++) {
    const n = +stickers.shift();
    const one = stickers.shift().split(" ").map(Number);
    const two = stickers.shift().split(" ").map(Number);

    let dp = [];
    
    for(let i = 0;i<=n;i++){
      dp.push([0,0,0]);
    } 

    dp[1][0] = 0;   // X X
    dp[1][1] = one[0]; // O X
    dp[1][2] = two[0]; // X O

    for(let j = 2 ; j <= n ; j++) {
        dp[j][0] = Math.max(dp[j-1][0], Math.max(dp[j-1][1], dp[j-1][2])); 
        dp[j][1] = Math.max(dp[j-1][0], dp[j-1][2]) + one[j-1];       
        dp[j][2] = Math.max(dp[j-1][0], dp[j-1][1]) + two[j-1]; 
    }

    console.log(Math.max(...dp[n]));
}