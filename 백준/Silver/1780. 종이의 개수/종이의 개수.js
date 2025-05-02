let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const papers = input.map((i) => i.split(" ").map(Number));
const answer = new Array(3).fill(0);

function countPaper(row, col, size) {
  let curNum = papers[row][col];
  let isSame = true;

  for (let i = row; i < row + size; i++) {
    for (let j = col; j < col + size; j++) {
      if (papers[i][j] !== curNum) {
        isSame = false;
        break;
      }
    }
    if (!isSame) break;
  }

  if (isSame) {
    answer[curNum + 1]++;
    return;
  }

  const newSize = size / 3;
  for (let dx = 0; dx < 3; dx++) {
    for (let dy = 0; dy < 3; dy++) {
      countPaper(row + dx * newSize, col + dy * newSize, newSize);
    }
  }
}

countPaper(0, 0, +N);
console.log(answer.join("\n"));
