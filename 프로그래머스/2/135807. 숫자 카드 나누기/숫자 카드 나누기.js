function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  let gcdNumA = getGCD(arrayA);
  let gcdNumB = getGCD(arrayB);

  let isMaxA = true;
  let isMaxB = true;

  // arrayB에 대해 gcdNumA가 모든 수를 나눌 수 있는지 확인
  for (let i = 0; i < arrayB.length; i++) {
    if (arrayB[i] % gcdNumA === 0) {
      isMaxA = false;
      break;  // 하나라도 나눠지면 바로 중단
    }
  }

  // arrayA에 대해 gcdNumB가 모든 수를 나눌 수 있는지 확인
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] % gcdNumB === 0) {
      isMaxB = false;
      break;  // 하나라도 나눠지면 바로 중단
    }
  }

  if (isMaxA && isMaxB) return Math.max(gcdNumA, gcdNumB);
  else if (isMaxA) return gcdNumA;
  else if (isMaxB) return gcdNumB;
  else return 0;
}

const getGCD = (array) => {
  let a = array[0];
  for (let i = 1; i < array.length; i++) {
    let b = array[i];
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }
  }
  return a;
};
