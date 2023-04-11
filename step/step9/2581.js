let [M, N] = require('fs').readFileSync('예제.txt').toString().trim().split("\n").map(Number);
const ans = [];

for(let i = M ; i <= N ; i++) {
    let cnt = 0;
    
    for(let j = 2 ; j < i ; j++) {
        if(i % j === 0) break;
        else {
            cnt++;
        }
    }
    if(cnt === i - 2) ans.push(i);
}

if( ans.length ) {
    console.log(ans.reduce((a,b) => a+b));
    console.log(ans[0]);    
} else {
    console.log(-1);
}
