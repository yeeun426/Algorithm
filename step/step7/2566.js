let input = require('fs').readFileSync('예제.txt').toString().split("\n").map((e) => e.split(" ").map(Number));

const numArr = []
for(let i = 0 ; i < input.length ; i++) {
    numArr.push(Math.max(...input[i]));
}

const maxNum = Math.max(...numArr)
let col = numArr.indexOf(maxNum)+1;
let row = input[col-1].indexOf(maxNum)+1;

console.log(maxNum);
console.log(col, row);