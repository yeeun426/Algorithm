let N = +require('fs').readFileSync('/dev/stdin').toString();

let cnt = 0;

while(N >= 5) {
    cnt += parseInt(N / 5);
    N /= 5;
}

console.log(cnt);