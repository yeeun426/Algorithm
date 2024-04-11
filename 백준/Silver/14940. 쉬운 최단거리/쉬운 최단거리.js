let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const graph = input.map(row => row.trim().split('').filter(char => char !== ' ').map(Number));
const visited = new Array(n).fill().map(() => new Array(m).fill(-1));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y) {
    const queue = [[x, y]];
    visited[x][y] = 0;

    while(queue.length > 0) {
        const [x, y] = queue.shift();

        for(let i = 0 ; i < 4 ; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];

            if (nx >= 0 && ny >= 0 && nx < n && ny < m && visited[nx][ny] == -1 && graph[nx][ny] === 1) {
                visited[nx][ny] = visited[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
}

for (let i = 0 ; i < n ; i++) {
    for (let j = 0 ; j < m ; j++) {
        if (graph[i][j] == 2) {
            bfs(i, j);
            break;
        }
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (graph[i][j] === 0) {
            visited[i][j] = 0;
        } else if (!graph[i][j]) {
            visited[i][j] = -1;
        }
    }
}     
console.log(visited.map(row => row.join(' ')).join('\n'))
