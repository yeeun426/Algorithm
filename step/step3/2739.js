let input = require('fs').readFileSync('예제.txt').toString().trim();

for(i = 1; i < 10; i++) {
    console.log(input + " * " + i + " = " + input * i);
    // console.log(`${num} * ${i} = ${num * i}`);
}