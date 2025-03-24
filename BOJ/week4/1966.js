let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
const T = Number(input[0]);

for (let i = 0; i < T; i++) {
  const [N, M] = input[i * 2 + 1].split(" ").map(Number);
  const queue = input[i * 2 + 2]
    .split(" ")
    .map((num, idx) => [idx, Number(num)]);

  let printOrder = 0; // 인쇄할 차례

  while (queue.length) {
    console.log(queue);
    const current = queue.shift();

    if (queue.some((doc) => current[1] < doc[1])) {
      queue.push(current);
    } else {
      printOrder++;
      if (current[0] === M) {
        console.log(printOrder);
        break;
      }
    }
  }
}
