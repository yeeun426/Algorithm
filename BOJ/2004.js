let [n, m] = require('fs').readFileSync('예제.txt').toString().split(" ").map(Number);

function getTwoFive(x) {
    let two = 0;
    let five = 0;

    for(let i = 2 ; i <= x ; i*=2) {
        two += parseInt(x/i);
    }

    while(x >= 5) {
        five += parseInt(x / 5);
        x /= 5;
    }
    return [two, five];
} 

const [nt, nf] = getTwoFive(n);
const [mt, mf] = getTwoFive(m);
const [nmt, nmf] = getTwoFive(n - m);
const two = nt - mt - nmt;
const five = nf - mf - nmf;
console.log(Math.min(two, five));