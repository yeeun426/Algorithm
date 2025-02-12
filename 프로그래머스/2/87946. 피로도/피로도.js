function solution(k, dungeons) {
    let maxCount = 0;

    function dfs(currentK, visited, count) {
        maxCount = Math.max(maxCount, count);

        for (let i = 0; i < dungeons.length; i++) {
            const [minFatigue, consumeFatigue] = dungeons[i];

            if (!visited[i] && currentK >= minFatigue) {
                visited[i] = true;
                dfs(currentK - consumeFatigue, visited, count + 1);
                visited[i] = false; 
            }
        }
    }

    dfs(k, Array(dungeons.length).fill(false), 0);
    return maxCount;
}
