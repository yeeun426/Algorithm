let input = require('fs').readFileSync('예제.txt').toString().split("\n");

for(i=0 ; i < Number(input[0]) ; i++) {
    let sum = 0;
    let score = 0;

    let OX = input[i+1].split("");
    
    for(j=0 ; j < OX.length ; j++) {
        if(OX[j] === "O") {
            score++;
            sum += score;
        } else {
            score = 0;
        }
    }
    console.log(sum);
}