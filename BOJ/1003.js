let [T, ...input] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .split("\n")
  .map(Number);

for (let i = 0; i < T; i++) {
  const n = input[i];

  const fibonacci = [
    [1, 0], // fibonacci(0)은 0이 1번, 1이 0번
    [0, 1], // fibonacci(1)은 0이 0번, 1이 1번
  ];

  for (let j = 2; j <= n; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0],
      fibonacci[j - 1][1] + fibonacci[j - 2][1],
    ];
  }
  console.log(fibonacci[n].join(" "));
}
