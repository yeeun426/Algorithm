function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]); // 비용 오름차순
  let [from, to, answer] = costs.shift();

  const connected = new Set([from, to]); // 중복 막기 위해 set 생성
  while (connected.size < n) {
    const index = costs.findIndex(
      ([from, to]) =>
        (connected.has(from) && !connected.has(to)) ||
        (connected.has(to) && !connected.has(from))
    );
    let [[from, to, cost]] = costs.splice(index, 1);
    answer += cost;
    connected.add(from).add(to); // 중복안되는 지점만 추가됨
  }
  return answer;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
