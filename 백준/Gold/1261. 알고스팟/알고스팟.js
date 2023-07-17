let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let [N, M] = input.shift().split(" ").map(Number);

const mazeArr = input.map((e) => e.split("").map(Number));
const visited = Array.from(Array(M), () => Array(N).fill(0));
const queue = [[0,0,0]];

visited[0][0] = 1;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

while(queue.length) {
    const[x, y, time] = queue.shift();

    if(x === M-1 && y === N-1) {
        console.log(time);
        break;
    }

    for(let i = 0 ; i < 4 ; i++) {
        const [nx, ny] = [x + dx[i], y+dy[i]];
        
        if(nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
        if(visited[nx][ny]) continue;

        visited[nx][ny] = 1;

        if(mazeArr[nx][ny]) {
            queue.push([nx, ny, time+1]);
        } else {
            queue.unshift([nx,ny,time]);
        }
    }
}