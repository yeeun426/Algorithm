let n = +require('fs').readFileSync('예제.txt').toString().trim();

// MenOfPassion(A[], n) {
//     sum <- 0;
//     for i <- 1 to n - 1
//         for j <- i + 1 to n
//             sum <- sum + A[i] × A[j]; # 코드1
//     return sum;
// }
console.log(n*(n-1)/2);
console.log(2);