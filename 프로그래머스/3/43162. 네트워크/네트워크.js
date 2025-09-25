function solution(n, computers) {
  var answer = 0;
  const visited = Array(n).fill(false);

  function bfs(start) {
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const node = queue.shift();

      for (let next = 0; next < n; next++) {
        // 연결되어 있고 아직 방문하지 않았다면
        if (computers[node][next] === 1 && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
    }
  }
  return answer;
}
