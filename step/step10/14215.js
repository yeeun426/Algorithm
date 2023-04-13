let [a, b, c] = require('fs').readFileSync('예제.txt').toString().trim().split(" ").map(Number).sort((a,b) => a-b);

if(a+b > c) {
    console.log(a+b+c);
} else {
    console.log(a+b+(a+b-1));
}