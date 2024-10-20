function solution(numbers) {
  var answer = new Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
    console.log(answer, stack);
  }
  return answer;
}
console.log(solution([9, 1, 5, 3, 6, 2]));

//sol 1. 시간 초과
// function solution(numbers) {
//   var answer = [];
//   let i = 0;

//   while (i < numbers.length) {
//     const ele = numbers[i];

//     for (let j = i + 1; j < numbers.length; j++) {
//       if (ele < numbers[j]) {
//         answer.push(numbers[j]);
//         break;
//       }
//     }
//     if (answer.length !== i + 1) answer.push(-1);
//     i++;
//   }

//   return answer;
// }
