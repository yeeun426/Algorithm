let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = Number(input[0]);

for (let i = 0; i < T; i++) {
  const [N, M] = input[i * 2 + 1].split(" ").map(Number);
  const queue = input[i * 2 + 2]
    .split(" ")
    .map((num, idx) => [idx, Number(num)]);

  let printOrder = 0;

  while (queue.length) {
    const current = queue.shift();

    if (queue.some((doc) => doc[1] > current[1])) {
      // 중요도가 더 높은 문서가 있다면 뒤로 보냄
      queue.push(current);
    } else {
      // 인쇄할 차례인 경우
      printOrder++;
      if (current[0] === M) {
        console.log(printOrder);
        break;
      }
    }
  }
}
