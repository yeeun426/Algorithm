let input = require('fs').readFileSync('예제.txt').toString().split(" ");

let [A, B, C] = input.map(Number);
let money = 0;

if (A === B && C === A) {
    money = 10000 + A * 1000;    
} else if (A === B || A === C) {
    money = 1000 + A * 100 ;
} else if (B === C) {
    money = 1000 + B * 100;
} else {
    money = Math.max(...input) * 100;
}

console.log(money);