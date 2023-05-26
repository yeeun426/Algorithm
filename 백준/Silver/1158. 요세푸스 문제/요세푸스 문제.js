let [N, K] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

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