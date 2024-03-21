function solution(n, computers) {
    var answer = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(node_idx) {
        visited[node_idx] = true;
        
        for(let v = 0 ; v < n ; v++) {
            if(!visited[v] && computers[node_idx][v]) {
                dfs(v);
            }
        }
    }
    
    for(let i = 0 ; i < n ; i++) {
        if(!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}