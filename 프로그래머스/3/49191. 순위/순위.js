function solution(n, results) {
    let answer = 0;
    const rankList = new Array(n + 1)
        .fill("")
        .map((v) => ({ rank: {}, win: [], lose: [] }));

    results.forEach(([win, lose]) => {
        rankList[win].win.push(lose);
        rankList[lose].lose.push(win);
    });
    
    function findRank(node, type, visited) {
        visited[node] = true;
        if (rankList[node].rank[type]) return rankList[node].rank[type];
        if (rankList[node][type].length < 1) return 0;

        let rank = 0;
        rankList[node][type].forEach((v) => {
            if (!visited[v]) {
                visited[v] = true;
                rank += 1 + findRank(v, type, visited);
            }
        });
        return rank;
    }

    for (let i = 1; i <= n; i++) {
        const winner = findRank(i, "lose", new Array(n+1).fill(false));
        const loser = findRank(i, "win", new Array(n+1).fill(false));
        if (winner + loser === n - 1) answer++;
    }
    return answer;
}
