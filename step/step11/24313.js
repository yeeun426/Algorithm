let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
let [a1, a0] = input[0].trim().split(" ").map(Number);
let c = +input[1];
let n0 = +input[2];
{ (a1 * n0 + a0 <= c * n0) && (a1 <= c) ? console.log(1) : console.log(0)};