let input = require('fs').readFileSync('예제.txt').toString().split("\n");

for(i = 1 ; i < +input[0]+1 ; i++) {
    let sum = 0;
    let count = 0;

    let score = input[i].split(" ").map(Number);
    const n = score.shift()*1; // 첫번째 값을 학생 수로 반환

    sum = score.reduce((acc, cur) => acc+=cur*1, 0); // 점수들의 합을 더함
    const avg = sum / n;

    for(k = 1 ; k <= +score[0] ; k++) {
        if(score[k] > average) {
            count++;
        }
    }

    console.log(`${(count/score[0] * 100).toFixed(3)}%`)
}