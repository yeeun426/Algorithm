let input = require('fs').readFileSync('예제.txt').toString().split("\n");
const T = Number(input.shift());
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let M, N, K, visited, field;

for (let i = 0 ; i < T ; i++) {
    [M, N, K] = input.shift().split(" ").map(Number);
    field = new Array(N).fill().map(() => new Array(M).fill(0));
    visited = new Array(N).fill().map(() => new Array(M).fill(0));
    let cnt = 0;
    for (let i = 0 ; i < K ; i++) {
        const [X, Y] = input.shift().split(" ").map(Number);
        field[Y][X] = 1;
    }

    for(let j = 0; j < M; j++){
        for(let k = 0; k < N; k++){
            if(field[k][j] == 1 && visited[k][j]==0){
                dfs(j,k)
                cnt ++
            }
        }
    }
    console.log(cnt);
}

function dfs(x, y) {
    visited[y][x] = 1;
    for (let i = 0 ; i < 4 ; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx >= 0 && nx < M && ny >= 0 && ny < N && field[ny][nx] && !visited[ny][nx]) {
            dfs(nx, ny);
        }
    }
}