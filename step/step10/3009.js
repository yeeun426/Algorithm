let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
const coordX = {};
const coordY = {};
const ans = [];

for(let i = 0 ; i < 3 ; i++) {
    if(!coordX[input[i].split(" ").map(Number)[0]]) {
        coordX[input[i].split(" ").map(Number)[0]] = 1;
    } else {
        coordX[input[i].split(" ").map(Number)[0]]++
    }

    if(!coordY[input[i].split(" ").map(Number)[1]]) {
        coordY[input[i].split(" ").map(Number)[1]] = 1;
    } else {
        coordY[input[i].split(" ").map(Number)[1]]++
    }
}

for(var key in coordX){
    if(coordX[key] == 1) ans.push(key)
}

for(var key in coordY){
    if(coordY[key] == 1) ans.push(key)
}

console.log(ans.join(" "));