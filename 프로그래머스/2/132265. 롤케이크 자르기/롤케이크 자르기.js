function solution(topping) {
  let answer = 0;
  const map = new Map(); //전체 토핑 개수로, for문이 돌면 동생의 토핑수가 된다.
  const broTopping = new Set();

  for (let i = 0; i < topping.length; i++) {
    map.has(topping[i])
      ? map.set(topping[i], map.get(topping[i]) + 1)
      : map.set(topping[i], 1);
  }

  for (let i = 0; i < topping.length; i++) {
    // 토핑을 하나씩 형한테 줌
    let cnt = map.get(topping[i]) - 1;
    broTopping.add(topping[i]);

    cnt == 0 ? map.delete(topping[i]) : map.set(topping[i], cnt);

    if (broTopping.size === map.size) answer++;
  }
  return answer;
}
