let [N, M, S] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let strP = "";
let answer = 0;

for (let i = 0; i < +N ; i++) {
    strP += "IO";
    if(i === N-1) strP += ("I");
}

for (let i = 0 ; i < +M ; i++) {
    const word = S.substring(i, strP.length + i);
    if(word.length < strP.length) break;
    if(word === strP) answer++;
}

console.log(answer)