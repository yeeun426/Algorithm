let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
const coordX = [];
const coordY = [];

for (let i = 0 ; i < Number(input[0]) ; i++) {
    coordX.push(input[i+1].split(" ").map(Number)[0]);
    coordY.push(input[i+1].split(" ").map(Number)[1]);
}

let width = Math.max(...coordX) - Math.min(...coordX);
let height = Math.max(...coordY) - Math.min(...coordY);

console.log(width * height);