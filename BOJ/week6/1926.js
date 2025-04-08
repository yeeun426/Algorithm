let [size, ...board] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = size.split(" ").map(Number);
const visited = Array.from({ length: n }, () => Array(m).fill(false)); // 방문 여부를 저장할 변수
board = board.map((b) => b.split(" ").map(Number));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let maxArea = 0;
let cnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (visited[i][j] || board[i][j] == 0) continue;
    bfs(i, j);
    cnt++;
  }
}

function bfs(startX, startY) {
  const queue = [];
  visited[startX][startY] = true;
  queue.push([startX, startY]); // (0,0)에 방문 표시를 하며 시작
  let area = 0;
  while (queue.length > 0) {
    area++;
    const [x, y] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nx][ny] || board[nx][ny] !== 1) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny]); // 큐에 추가
    }
  }
  if (maxArea < area) maxArea = area;
}

console.log(cnt);
console.log(maxArea);
