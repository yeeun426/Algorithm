let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let count = 0;

while(N >= 0) {
    if(N % 5 == 0) {
        count += N / 5;
        N %= 5;
        break;
    } else {
        N -= 3;
        count += 1;
    }
}
console.log(N === 0 ? count : -1);