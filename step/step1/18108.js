let input = require('fs').readFileSync('예제.txt').toString().split(" ");

const blackNum = [1, 1, 2, 2, 2, 8];

const result = blackNum.map((black, i) => black - input[i]);

console.log(result.join(" "));