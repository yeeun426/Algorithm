function solution(number, limit, power) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    const divisor = [];
    for (let j = 1; j <= Math.ceil(Math.sqrt(i)); j++) {
      if (i % j !== 0) continue;
      if (!divisor.includes(j)) divisor.push(j);
      if (!divisor.includes(i / j)) divisor.push(i / j);
    }
    console.log(divisor);

    answer += divisor.length > limit ? power : divisor.length;
  }
  return answer;
}

console.log(solution(5, 3, 2));
