let [N, ...classes] = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let answer = 0;
let currentRoom = 0;
const obj = []

for (let i = 0 ; i < +N ; i++) {
    const [start, end] = classes[i].split(" ").map(Number);
    obj.push({ time: start, type: 1 });
    obj.push({ time: end, type: -1 });
}

obj.sort((a, b) => a.time === b.time ? a.type - b.type : a.time - b.time);

for (const event of obj) {
    currentRoom += event.type;
    answer = Math.max(answer, currentRoom);
}

console.log(answer);