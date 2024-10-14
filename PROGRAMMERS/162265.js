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

// Q
// 1. new Map()

// sol 1 : 시간 초과
// function solution(topping) {
//   let answer = 0;
//   const oldToppingSet = new Set(); // 철수 토핑
//   const youngToppingSet = new Set(); // 동생 토핑
//   let cutIdx = 1;

//   while (cutIdx > -1 && cutIdx < topping.length) {
//     for (let i = 0; i < cutIdx; i++) {
//       oldToppingSet.add(topping[i]);
//     }
//     for (let j = cutIdx; j < topping.length; j++) {
//       youngToppingSet.add(topping[j]);
//     }

//     if (oldToppingSet.size > youngToppingSet.size) break;
//     if (oldToppingSet.size === youngToppingSet.size) answer++;

//     cutIdx++;
//     oldToppingSet.clear();
//     youngToppingSet.clear();
//   }
//   return answer;
// }

console.log(solution([1, 2, 3, 1, 4]));
