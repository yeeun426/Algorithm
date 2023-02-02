let input = require('fs').readFileSync('예제.txt').toString().trim();
let wordArr = input.split(" ");
console.log(wordArr[0] === "" ? 0 : wordArr.length);