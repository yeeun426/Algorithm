let n = +require('fs').readFileSync('예제.txt').toString().trim();

console.log(n);
console.log(1);
// MenOfPassion(A[], n) {
//     sum <- 0;
//     for i <- 1 to n
//         sum <- sum + A[i]; # 코드1
//     return sum;
// }