function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    const bit = numbers[i].toString(2).split("").map(Number);

    if (numbers[i] % 2 === 0) {
      answer.push(numbers[i] + 1);
    } else {
      bitOutChange(bit);
      answer.push(parseInt(bit.join(""), 2));
    }
  }
  return answer;
}

function bitOutChange(bit) {
  for (let j = bit.length - 1; j >= 0; j--) {
    if (bit[j] === 0) {
      bit[j] = 1;
      bit[j + 1] = 0;
      return;
    }
  }
  bit[0] = 0;
  bit.unshift(1);
}

console.log(solution([2, 7])); 
