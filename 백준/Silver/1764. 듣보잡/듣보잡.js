let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const person = {};

for (let i = 1; i <= N; i++) {
  person[input[i]] ? person[input[i]]++ : (person[input[i]] = 1);
}

for (let i = 0; i < M; i++) {
  {
    person[input[i + N + 1]]
      ? person[input[i + N + 1]]++
      : (person[input[i + N + 1]] = 1);
  }
}

let answer = Object.keys(person)
  .filter((key) => person[key] >= 2)
  .sort();

console.log(answer.length);
console.log(answer.join("\n"));
