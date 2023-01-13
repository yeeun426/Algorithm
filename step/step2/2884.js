let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split(' ');

let [H, M] = input.map(Number);

M -= 45;

if (M < 0) {
    M += 60;
    H -= 1;

    if(H < 0) {
        H = 23;
    }
}

console.log(H + " " + M)