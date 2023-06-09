let [N, A] = require('fs').readFileSync('예제.txt').toString().split("\n");
const Alist = A.split(" ").map(Number);
// sol2 
// 참고 : https://hooongs.tistory.com/329
const stack = [];
const answer = Array(+N).fill(-1);

for(let i = 0 ; i < N ; i++) {
    // Alist[stack[stack.length-1]] : 왼쪽 수
    // Alist[i] : 오른쪽 수
    // Alist[stack[stack.length-1]] <  Alist[i] 인 경우 오큰수
    while(stack.length && Alist[stack[stack.length-1]] < Alist[i]) {
        answer[stack.pop()] = Alist[i];
    }
    stack.push(i)
}

console.log(answer.join(" "));
console.log(Alist);
// sol1 시간초과
// let answer = [];

// for(let i = 0 ; i < N; i++) {
//     for(let j = i + 1 ; j <= N ; j++) {

//         if (j == N) {
//             answer.push(-1);
//             break;
//         }

//         if(A[i] < A[j]) {
//             answer.push(A[j]);
//             break;
//         } else if (j === A.length-1) {
//             answer.push(-1);
//             break;
//         }
//     }
// }

// console.log(answer.join(" "));