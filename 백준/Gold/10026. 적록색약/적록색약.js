let [N, ...board] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

board = board.map((color) => color.split(""));
const visited = Array.from({ length: +N }, () => Array(+N).fill(0)); // 적록색약 X

const rgBoard = board.map((row) =>
  row.map((color) => (color === "R" ? "G" : color)),
);
const rgVisited = Array.from({ length: +N }, () => Array(+N).fill(0)); // 적록색약 O

const answer = [];
let count = 0;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const bfs = (startX, startY, vis, board) => {
  const queue = [[startX, startY]];
  vis[startX][startY] = 1;
  count++;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    let color = board[x][y];

    for (let dir = 0; dir < 4; dir++) {
      const [nx, ny] = [x + dx[dir], y + dy[dir]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (vis[nx][ny] == 1 || board[nx][ny] !== color) continue;

      vis[nx][ny] = 1;
      queue.push([nx, ny]);
    }
  }
};

// 적록 색약 아닌 경우
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] === 0) bfs(i, j, visited, board);
  }
}

answer.push(count);
count = 0;

// 적록 색약인 경우
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (rgVisited[i][j] === 0) bfs(i, j, rgVisited, rgBoard);
  }
}

answer.push(count);
console.log(answer.join(" "));