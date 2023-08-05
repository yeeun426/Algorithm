// 14712
let [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

let answer = 0;
const map = Array.from(new Array(N+1), () => new Array(M+1).fill(0));

function dfs(cnt) {
    if(cnt === N * M) {
        answer++;
        return;
    }

    const x = parseInt(cnt / M) + 1;
    const y = (cnt % M) + 1;

    dfs(cnt + 1)

    if (map[x - 1][y] === 0 || map[x][y - 1] === 0 || map[x - 1][y - 1] === 0) {
        map[x][y] = 1;
        dfs(cnt + 1);
        map[x][y] = 0;
    }
}

dfs(0)
console.log(answer);