let [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
let idx = 0;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

// N: 세로 (행 개수) → 보통 x축으로 취급 (위아래 방향)
// M: 가로 (열 개수) → 보통 y축으로 취급 (좌우 방향)

while (idx < input.length) {
  let [M, N, K] = input[idx].split(" ").map(Number);
  const field = Array.from({ length: N }, () => Array(M).fill(0)); // 배추밭
  const visited = Array.from({ length: N }, () => Array(M).fill(0)); // 거리를 저장할 변수
  answer = 0;
  for (let j = idx + 1; j < K + idx + 1; j++) {
    const [y, x] = input[j].split(" ").map(Number);
    field[x][y] = 1;
  }
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (field[x][y] == 1 && visited[x][y] == 0) {
        // 배추있고,방문 x
        bfs(x, y, visited, field);
      }
    }
  }
  idx += K + 1;
  console.log(answer);
}

function bfs(startX, startY, visited, field) {
  const queue = [[startX, startY]];
  visited[startX][startY] = 1;
  answer++;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const [nx, ny] = [x + dx[dir], y + dy[dir]];

      if (nx < 0 || nx >= field.length || ny < 0 || ny >= field[0].length)
        continue;

      if (field[nx][ny] == 0 || visited[nx][ny] == 1) continue;

      queue.push([nx, ny]);
      visited[nx][ny] = 1;
    }
  }
}
