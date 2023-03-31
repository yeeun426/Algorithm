let [T, ...input] = require('fs').readFileSync('예제.txt').toString().split("\n").map(Number);

for(let i = 0; i < T ; i++) {

    const ans = [];
    let money = input[i];
    const change = [25, 10, 5, 1]

    for(let j = 0 ; j < change.length ; j++) {
        if(money >= change[j]) {
            ans.push(parseInt(money/change[j]));
            money -= ans[j] * change[j]        
        } else {
            ans.push(0);
        }
    }
    console.log(ans.join(" "));
}