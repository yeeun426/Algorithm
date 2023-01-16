let input = require('fs').readFileSync('예제.txt').toString().trim();
let N = Number(input);

for (let i = 0; i < N ; i++) {
    let star = "";

    for(let j = N - 1; j >= 0 ; j--) {
        star += j <= i ? "*" : " ";
    }

    console.log(star);
}