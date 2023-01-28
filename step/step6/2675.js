let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let T = +input[0]

for(i = 0 ; i < T ; i++) {
    let answer = "";
    let [R, S] = input[i+1].trim().split(" ");

    for(j = 0 ; j < S.length ; j++) {
        answer += S[j].repeat(R);
    }
    console.log(answer);
}
