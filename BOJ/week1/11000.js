let [N, ...classes] = require('fs').readFileSync('예제.txt').toString().split("\n");

let answer = 0;
let currentRoom = 0;
const obj = []

for (let i = 0 ; i < +N ; i++) {
    const [start, end] = classes[i].split(" ").map(Number);
    obj.push({ time: start, type: 1 }); // 시작 : 1
    obj.push({ time: end, type: -1 }); // 끝 : -1
}

// 시간 순대로 정렬하되 동일한 시간인 { time: 3, type: -1 },{ time: 3, type: 1 } 경우 끝나는 시간 { time: 3, type: -1 }을 먼저 정렬
obj.sort((a, b) => a.time === b.time ? a.type - b.type : a.time - b.time);

for (const event of obj) {
    currentRoom += event.type;
    answer = Math.max(answer, currentRoom);
}

console.log(answer);

// 메모리 초과
// let [N, ...classes] = require('fs').readFileSync('예제.txt').toString().split("\n");

// const table = {};
// let answer = 0;

// for(let i = 0 ; i < N ; i++) {
//     const [start, finish] = classes[i].split(" ").map(Number);

//     for(let j = start ; j < finish ; j++) {
//         {table[j] ? table[j]++ : table[j]=1}
//         if(answer < table[j]) answer = table[j];
//     }
// }

// console.log(answer);