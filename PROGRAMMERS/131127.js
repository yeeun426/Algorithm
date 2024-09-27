function solution(want, number, discount) {
  var answer = 0;
  const saleArr = new Array(number.length).fill(0);

  function equals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  for (let i = 0; i < discount.length; i++) {
    let index = want.indexOf(discount[i]);
    if (index > -1) {
      saleArr[index]++;
    }

    console.log(i, saleArr);

    if (i >= 9) {
      if (want.indexOf(discount[i - 10]) > -1) {
        saleArr[want.indexOf(discount[i - 10])]--;
      }
      if (equals(saleArr, number)) answer++;
    }
  }
  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ],
  ),
);
