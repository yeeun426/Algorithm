let input = require('fs').readFileSync('예제.txt').toString().split("\n");

let [A, B] = input[0].split(" ").map(Number);
let C = Number(input[1]);

B += C;

if (B > 59) {
    addHour = parseInt(B / 60);
    A += addHour;
    B %= 60;

    if (A >= 24) {
        A %= 24;
    }
}

console.log(A + " " + B);