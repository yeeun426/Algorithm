let input = require('fs').readFileSync('예제.txt').toString().trim();
let star = "";

for (i = 0; i < +input ; i++) {
    star += "*";
    console.log(star);
}