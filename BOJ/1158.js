let [N, K] = require('fs').readFileSync('예제.txt').toString().split(" ").map(Number);

const circleQueue = [];
const result = [];

for(let i = 1 ; i < N+1 ; i++) {
    circleQueue.push(i);
}

let count = 1;

while (circleQueue.length) {
    const shiftItem = circleQueue.shift();
    if(count % K == 0) {
        result.push(shiftItem);
    } else {
        circleQueue.push(shiftItem);
    }
    count++;
}
console.log(`<${result.join(", ")}>`);

// 첫번째 방법 : 시간초과
// let [N, K] = require('fs').readFileSync('예제.txt').toString().split(" ").map(Number);

// let result = [];
// let circle = [];

// let removeIndex = K;
// let i = 1;

// let filterArr = circle;

// for(let i = 1 ; i < N+1 ; i++) {
//     circle.push(i);
// }

// while(result.length < N) {
//     // removeIndex : 3 -> 6 -> 9 -> 12 ...
//     // circle : 1234567 12457 145 14 1 4
//         // 제거된 사람들을 제외한 사람들을 계속해서 붙여줌
//     // result에 총 N명의 사람이 차면 while문 종료
//     if(removeIndex > circle.length) {
//         for(let i = 0 ; i < result.length ; i++) {
//             filterArr = filterArr.filter(function(item) {
//                 return item !== result[i]
//             })
//         }

//         for(let j = 0 ; j < filterArr.length ; j++) {
//             circle.push(filterArr[j]);  
//         }
//     } else {
//         result.push(circle[removeIndex-1]);
//         removeIndex = K * (i+1);
//         i++
//     }
// }
// console.log(`<${result.join(", ")}>`);

