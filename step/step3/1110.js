let input = Number(require('fs').readFileSync('예제.txt').toString().trim());

let N = input;
let sum = 0;
let num = 0;

while (true) {
    num++

    sum = parseInt(N / 10) + (N % 10);
    N = (N % 10) * 10 + (sum % 10);

    if (N === input) {
        break;
    }
}

console.log(num);