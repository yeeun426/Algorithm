function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  let gcdNumA = getGCD(arrayA);
  let gcdNumB = getGCD(arrayB);

  let isMaxA = true;
  let isMaxB = true;

  for (let i = 0; i < arrayA.length; i++) {
    if (arrayB[i] % gcdNumA == 0 && isMaxA) isMaxA = false;
    if (arrayA[i] % gcdNumB == 0 && isMaxB) isMaxB = false;
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
  if (a === 1) return 0;
  return a;
};
