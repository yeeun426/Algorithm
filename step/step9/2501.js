let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n").map(Number);

for(let i = 0 ; i <= input.length ; i++) {
    const ans = [];
    let sum = 0;

    if(input[i] === -1) break;

    for(let j = 1 ; j < input[i] ; j++) {
        if(input[i] % j === 0 && ans.indexOf(j) === -1)  {
            ans.push(j);
        }
    }

    for(let k = 0 ; k < ans.length ; k++) {
        sum += ans[k];
    }
    
    if(sum == input[i]) {
        let plus = ans.join(" + ")
        console.log(`${input[i]} = ${plus}`)
    } else {
        console.log(`${input[i]} is NOT perfect.`);
    }
}