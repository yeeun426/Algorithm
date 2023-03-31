let input = +require('fs').readFileSync('예제.txt').toString();
// 2(0) - 3(1) - 5(2) - 9 - 17
//      1   2   4   8

// 1번 : (2ans + 2^(1-1)) ^ 2 -> 9
// 2번 : 3ans + 2^(2-1) 
let ans = 2;

for(let i = 0 ; i < input ; i++) {
    ans += 2**i;
}

console.log(ans**2);