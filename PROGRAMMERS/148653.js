function solution(storey) {
  let result = 0;

  while (storey) {
    let cur = storey % 10;
    let next = (storey / 10) % 10;

    if (cur > 5) {
      result += 10 - cur;
      storey += 10;
    } else if (cur === 5) {
      result += cur;
      storey += next >= 5 ? 10 : 0;
    } else {
      result += cur;
    }

    console.log(cur, next, result, storey, parseInt(storey / 10));

    storey = parseInt(storey / 10);
  }

  return result;
}

console.log(solution(16));
console.log(solution(2554));
