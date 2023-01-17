let input = require('fs').readFileSync('예제.txt').toString().split("\n");

for(i = 1 ; i < +input[0]+1 ; i++) {
    
    let score = input[i].split(" ").map(Number);
    let sum = 0;
    let count = 0;

    for(j = 1 ; j < +score[0]+1 ; j++) {
        sum += score[j]
    }
    let average = sum/score[0];

    for(k = 1 ; k < +score[0]+1 ; k++) {
        if(score[k] > average) {
            count++;
        }
    }

    console.log(`${(count/score[0] * 100).toFixed(3)}%`)
}