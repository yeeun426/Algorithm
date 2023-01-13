// fs모듈 사용 시 백준에서는 런타임 에러 발생 -> readline 모듈로 변경
// let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
// let [x, y] = input.map(Number);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(parseInt(line));
}).on("close", () => {
  const x = input[0];
  const y = input[1];

    if (x > 0 && y > 0) {
        console.log("1");
    } else if (x < 0 && y > 0) {
        console.log("2");
    } else if (x < 0 && y < 0) {
        console.log("3");
    } else {
        console.log("4");
    }
})

// 다른 사람 풀이
// if (x > 0) {
// console.log(y > 0 ? 1 : 4);
// } else {
// console.log(y > 0 ? 2 : 3);
// }