function solution(m, n, puddles) {
    const dp = Array.from(Array(n+1), () => Array(m+1).fill(1)); 

    puddles.forEach(([x, y]) => {
        dp[y][x] = 0;
        if(x === 1) {
            for(let i = y+1; i <= n; i++) dp[i][x] = 0;
        }
        if(y === 1) {
            for(let i = x+1; i <= m; i++) dp[y][i] = 0;
        }
    })
    
    for(let x = 1 ; x <= m ; x++){
        for(let y = 1 ; y <= n ; y++){
            if(x - 1 < 1 || y - 1 < 1) continue;
            if(dp[y][x] === 0) continue;
            dp[y][x] = (dp[y][x-1] + dp[y-1][x]) % 1000000007;
        }
    }
    return dp[n][m];
}