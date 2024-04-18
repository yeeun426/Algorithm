let [N, ...input] = require('fs').readFileSync('예제.txt').toString().split("\n").map(Number);
const arr = input.sort((a,b) => a-b);
console.log(arr)
let temp;

for(let i = 0 ; i < N ; i++) {
    if(input[i] > 0) {
        arr.push(input[i]);
    } else if(input[i] == 0) {
        console.log(arr.length > 0 ? arr.shift() : 0);
    }
    if(arr[arr.length-1] < arr[arr.length-2]) {
        temp = arr[arr.length-2];
        arr[arr.length-2] = arr[arr.length-1];
        arr[arr.length-1] = temp;
    }
}
