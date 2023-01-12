const [num1, num2] = require('fs').readFileSync('예제.txt').toString().split('\n');
const num = Number(num1);

const [B0, B1, B2] = num2.split('');

console.log(num1 * B2);
console.log(num1 * B1);
console.log(num1 * B0);
console.log(num1 * num2);