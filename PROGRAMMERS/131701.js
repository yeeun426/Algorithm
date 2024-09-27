function solution(elements) {
  const elSet = new Set();

  for (let length = 1; length <= elements.length; length++) {
    for (let i = 0; i <= elements.length; i++) {
      let sum = 0;
      for (let j = i; j < length + i; j++) {
        sum += elements[j % elements.length];
      }
      elSet.add(sum);
    }
  }

  return elSet.size;
}

console.log(solution([7, 9, 1, 1, 4]));
