let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

for(i = 0 ; i < input.length-1 ; i++) {
    let [A, B] = input[i].split(' ').map(Number);
    console.log(A + B);
}