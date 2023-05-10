let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
let T = +input.shift();

for(let i = 0 ; i < T ; i++) {
    const VPS = input[i].trim().split("");
    let open = 0;
    let close = 0;

    for(let j = 0 ; j < VPS.length ; j++) {
        if(VPS[j] == "(") {
            open++;
        } else {
            close++;
        }
        // 열린 괄호보다 닫힌 괄호가 더 많을 시 VPS 아님
        if(open < close) break;
    }

    console.log(open===close ? "YES" : "NO");
}
