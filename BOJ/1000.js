let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
let [A, B] = input.map((a) => Number(a));

console.log(A + B);
