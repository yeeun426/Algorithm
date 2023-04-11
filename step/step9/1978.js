let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
let N =  +input[0]
input = input[1].split(" ").map(Number);
let ans = 0;

for (let i = 0 ; i < N ; i++) {
    let cnt = 0;
    if(input[i] === 1) continue;

    for(let j = 2 ; j < input[i] ; j++) {
        if(input[i] % j !== 0) cnt++
    }
    if(cnt === input[i] - 2) ans++;
}

console.log(ans);