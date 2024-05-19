let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const t = input[0];

function getGCD(a, b){
    while(b != 0){
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
  
for (let i = 1 ; i <= t ; i++ ) {
    const testCase = input[i].split(" ").map(Number);
    const n = testCase[0];
    let sum = 0;

    for (let j = 1 ; j < n ; j++) {
        for (let k = j + 1 ; k < n + 1 ; k++) {
			sum += getGCD(testCase[j], testCase[k])
        }
    }
    console.log(sum);
}