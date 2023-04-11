let N = +require('fs').readFileSync('예제.txt').toString().trim();
let prime = 2;
let ans = [];

while(N !== 1) {
    if(N % prime === 0) {
        ans.push(prime);
        N = N / prime;
    } else {
        prime++;
    }
}

console.log(ans.join("\n"));