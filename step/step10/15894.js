let n = +require('fs').readFileSync('예제.txt').toString().trim();
// n = 1 , output = 4
// n = 2, output = 8
// n = 3 , output = 12

console.log(n * 4);