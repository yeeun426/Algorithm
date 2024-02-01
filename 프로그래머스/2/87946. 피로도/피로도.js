function solution(k, dungeons) {
    const visited = new Array(dungeons.length).fill(false);
    return dfs(k, dungeons, visited, 0, 0);
}

function dfs(tired, dungeons, visited, maxCnt, cnt) {
    let m = maxCnt;
    
    for (let i = 0; i < dungeons.length; i++) {
        if (!visited[i] && tired >= dungeons[i][0]) {
            visited[i] = true;
            m = dfs(tired - dungeons[i][1], dungeons, visited, m, cnt + 1);
            visited[i] = false;
        }
    }
    
    return Math.max(m, cnt);
}

