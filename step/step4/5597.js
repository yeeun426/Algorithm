const input = require('fs').readFileSync('예제.txt').toString().split('\n').map(Number);
const nums = input.sort(function(a, b) {
    return a - b;
});

let notSubmit = [];

for(i = 1; i <= 30 ; i++) {
    if(!nums.includes(i)){
        notSubmit.push(i);
    }
}

console.log(notSubmit[0]);
console.log(notSubmit[1]);