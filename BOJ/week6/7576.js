// 모든 지점으로부터 거리를 구하는 문제
// 모든 시작점을 큐에 넣고 BFS를 돌리기
// 익은 토마토(시작점)는 큐에 넣고, 익지 않은 토마토는 dist -1로 둔다.

let [size, ...tomatos] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [m, n] = size.split(" ").map(Number);
const ripedDist = Array.from({ length: n }, () => Array(m).fill(0)); // 익거나 빈칸 -> 0
tomatos = tomatos.map((t) => t.split(" ").map(Number));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const queue = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (tomatos[i][j] == 1) queue.push([i, j]);
    else if (tomatos[i][j] == 0) ripedDist[i][j] = -1; // 익지 않은거 : -1
  }
}

let qIdx = 0; // shift() : `배열 젤 앞의 원소를 삭제` 사용하면 O(n)으로 시간초과

while (qIdx < queue.length) {
  const [x, y] = queue[qIdx++];

  for (let dir = 0; dir < 4; dir++) {
    const [nx, ny] = [x + dx[dir], y + dy[dir]];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (ripedDist[nx][ny] >= 0) continue;

    queue.push([nx, ny]);
    ripedDist[nx][ny] = ripedDist[x][y] + 1;
  }
}

let day = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (ripedDist[i][j] == -1) return console.log(-1);
    day = Math.max(ripedDist[i][j], day);
  }
}

console.log(day);
