let N = +require("fs").readFileSync("/dev/stdin").toString().trim();

const board = Array.from({ length: N }, () => Array(N).fill(" "));

function draw(x, y, n) {
  if (n === 1) {
    board[x][y] = "*";
    return;
  }

  const k = Math.floor(n / 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue;
      draw(x + i * k, y + j * k, k);
    }
  }
}

draw(0, 0, N);
console.log(board.map((b) => b.join("")).join("\n"));
