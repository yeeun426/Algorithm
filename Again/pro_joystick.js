function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  const connects = new Set([costs[0][0], costs[0][1]]);
  let answer = costs[0][2];

  while (connects.size < n) {
    const index = costs.findIndex(
      ([from, to]) =>
        (connects.has(from) && !connects.has(to)) ||
        (connects.has(to) && !connects.has(from))
    );
    answer += costs[index][2];
    connects.add(costs[index][0]).add(costs[index][1]);
    costs.splice(index, 1);
  }
  return answer;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [2, 3, 1],
  ])
);
