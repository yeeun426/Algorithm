let [size, ...board] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = size.split(" ").map(Number);
const dist = Array.from({ length: N }, () => Array(M).fill(-1)); // 거리를 저장할 변수
board = board.map((b) => b.split("").map(Number));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function dfs(startX, startY) {
  const queue = [];
  dist[0][0] = 0;
  queue.push([startX, startY]); // (0,0)에 방문 표시를 하며 시작

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const [nx, ny] = [x + dx[dir], y + dy[dir]];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (dist[nx][ny] !== -1 || board[nx][ny] !== 1) continue;

      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

dfs(0, 0);
console.log(dist[N - 1][M - 1] + 1);
