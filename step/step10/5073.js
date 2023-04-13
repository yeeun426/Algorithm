let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");

for(let i = 0 ; i < input.length-1 ; i++) {
    let [A, B, C] = input[i].split(" ").map(Number).sort((a,b) => a-b);
    if (A + B > C) {
        if(A == B && B == C) {
            console.log('Equilateral');
        } else if(A == B || B == C) {
            console.log('Isosceles');
        } else {
            console.log('Scalene');
        }
    } else{
        console.log('Invalid');
    }
}