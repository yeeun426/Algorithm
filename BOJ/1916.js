let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const M = Number(input.shift());

const graph = new Array(N + 1).fill(null).map(() => []);

for (i = 0; i < M; i++) {
  let [a, b, cost] = input[i].split(" ").map(Number);
  graph[a].push([b, cost]);
}

let [start, end] = input[M].split(" ").map(Number);

function bfs(start, end) {
  const dist = new Array(N + 1).fill(Infinity);
  dist[start] = 0;

  const queue = [[start, 0]];

  while (queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]);
    const [cur_v, cur_cost] = queue.shift();

    if (cur_v === end) return cur_cost;

    for (const [v, c] of graph[cur_v]) {
      const new_cost = cur_cost + c;
      if (new_cost < dist[v]) {
        dist[v] = new_cost;
        queue.push([v, new_cost]);
      }
    }
  }
  return dist[end];
}

console.log(bfs(start, end));
