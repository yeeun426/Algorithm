let input = require('fs').readFileSync('예제.txt').toString().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const map = input.map(x => x.split("").map(Number));
const queue = [[0, 0]];

const dx = [-1, 1, 0, 0];
const dy = [0, 0 , -1, 1];

function bfs(x, y) {
    const queue = [];
    queue.push([x, y]);

    while(queue.length) {
        const [x, y] = queue.shift();

        for(let i = 0 ; i < 4 ; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
            if (map[nx][ny] === 0) continue;
            if (map[nx][ny] === 1) {
                map[nx][ny] = map[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    return map[N-1][M-1]
}

console.log(bfs(0,0));