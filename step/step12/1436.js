let N = +require('fs').readFileSync('예제.txt').toString().trim();
// 666 - 1666 - 2666 - 3666 - 4666 - 5666 - 6660 - 6661 - ...
// 6669 - 7666 - 8666
let answer = [];

for(let i = 666 ; i < 100000000 ; i++) {
    let pos = i.toString().indexOf("666");

    if(pos !== -1) answer.push(i);
    if(answer.length === N) break;
}

console.log(answer[N-1]);