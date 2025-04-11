let [size, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = size.split(" ").map(Number);
input = input.map((i) => i.split(" ").map(Number));

const tomatos = [];
const dist = [];
const queue = [];

for (let i = 0; i < input.length; i += N) {
  tomatos.push(input.slice(i, i + N));
  dist.push(
    Array.from({ length: N }, () => Array.from({ length: M }, () => -1)),
  );
}

for (let x = 0; x < H; x++) {
  for (let y = 0; y < N; y++) {
    for (let z = 0; z < M; z++) {
      if (tomatos[x][y][z] == 1) {
        queue.push([x, y, z]);
        dist[x][y][z] = 0;
      } else if (tomatos[x][y][z] == -1) dist[x][y][z] = 0;
    }
  }
}

dx = [0, 0, 0, 0, -1, 1];
dy = [1, 0, -1, 0, 0, 0];
dz = [0, 1, 0, -1, 0, 0];

let qIdx = 0;

while (qIdx < queue.length) {
  const [x, y, z] = queue[qIdx++];

  for (let dir = 0; dir < 6; dir++) {
    const [nx, ny, nz] = [x + dx[dir], y + dy[dir], z + dz[dir]];

    if (nx < 0 || nx >= H || ny < 0 || ny >= N || nz < 0 || nz >= M) continue;
    if (dist[nx][ny][nz] !== -1 || tomatos[nx][ny][nz] !== 0) continue;

    dist[nx][ny][nz] = dist[x][y][z] + 1;
    queue.push([nx, ny, nz]);
  }
}

let day = 0;

for (let x = 0; x < H; x++) {
  for (let y = 0; y < N; y++) {
    for (let z = 0; z < M; z++) {
      if (dist[x][y][z] < 0) return console.log(-1);
      day = Math.max(day, dist[x][y][z]);
    }
  }
}

console.log(day);
