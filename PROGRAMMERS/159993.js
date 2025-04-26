function solution(maps) {
  let answer = 0;
  const start = [],
    lever = [],
    exit = [];
  const maze = maps.map((map) => map.split(""));

  // 통로와 벽 구분
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maze[i][j] === "X") {
        maze[i][j] = 0;
        continue;
      }
      // 1. S, L, E를 변수에 저장
      if (maze[i][j] == "S") start.push(i, j);
      else if (maze[i][j] == "L") lever.push(i, j);
      else if (maze[i][j] == "E") exit.push(i, j);
      maze[i][j] = 1;
    }
  }

  const leverDist = bfs(start, lever, maze);
  const exitDist = bfs(lever, exit, maze);

  return !leverDist || !exitDist ? -1 : leverDist + exitDist;
}
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const bfs = (start, end, map) => {
  const dist = Array.from(Array(map.length), () =>
    Array(map[0].length).fill(0),
  );

  const [startX, startY] = start;
  const queue = [[startX, startY]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= map.length || ny < 0 || ny >= map[0].length) continue;
      if (dist[nx][ny] !== 0 || map[nx][ny] == 0) continue;

      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
  return dist[end[0]][end[1]];
};

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]));
