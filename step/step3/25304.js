let input = require('fs').readFileSync('예제.txt').toString().split("\n");
let sum = 0;

for (i = 2 ; i <= Number(input[1])+1 ; i++) {
    let [price, num] = input[i].split(" ").map(Number);
    sum += price * num;
}

console.log(sum === Number(input[0]) ? "Yes" : "No");