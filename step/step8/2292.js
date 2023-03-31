let N = +require('fs').readFileSync('예제.txt').toString();
// 1 -> 1 + 6 -> 7 + 12 -> 19 + 18 -> 24 -> ...
let pattern = 1;
let cnt = 1;

for (let i = 1; i < N ; i++) {
    pattern += 6 * i;
    cnt++;

    if(pattern >= N) break;
}

console.log(cnt);