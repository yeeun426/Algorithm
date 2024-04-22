let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const painting = input.map(x => x.split(""));
N = parseInt(N);
let [normalCnt, colorCnt] = [0, 0];

let visited = new Array(+N).fill().map(() => new Array(+N).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y) {
    visited[x][y] = 1;
    const color = painting[x][y];

    for(let i = 0 ; i < 4 ; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if(nx >= 0 && nx < N && ny >= 0 && ny < N && visited[nx][ny] == 0 && painting[x][y] == painting[nx][ny]) {
            dfs(nx, ny);
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
            dfs(i, j);
            normalCnt++;
        }   
    }
}

visited = new Array(+N).fill().map(() => new Array(+N).fill(0));
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (painting[i][j] === "R" || painting[i][j] === "G") painting[i][j] = "#";
    }
}
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
            dfs(i, j);
            colorCnt++;
        }
    }
}

console.log(normalCnt, colorCnt);