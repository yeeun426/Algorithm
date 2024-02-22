function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]); // 비용 오름차순
  let [from, to, answer] = costs.shift();

  const connected = new Set([from, to]);
  while (connected.size < n) {
    const index = costs.findIndex(
      ([from, to]) =>
        (connected.has(from) && !connected.has(to)) ||
        (connected.has(to) && !connected.has(from))
    );
    let [[from, to, cost]] = costs.splice(index, 1);
    answer += cost;
    connected.add(from).add(to);
  }
  return answer;
}