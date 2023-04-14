let n = +require('fs').readFileSync('예제.txt').toString().trim();
n = BigInt(n);
console.log(`${n*(n-1n)*(n-2n)/6n}`);
console.log(3);