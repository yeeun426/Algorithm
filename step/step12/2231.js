let input = +require('fs').readFileSync('예제.txt').toString().trim();
// 198 + 1 + 9 + 8 = 198 + 18 = 216
const ans = [];

for(let i = 0 ; i < input-1 ; i++) {
    const sum = i.toString().split("").reduce((acc,cur) => acc += Number(cur), 0);
    if(sum+i === input) {
        ans.push(i);
    }
}

console.log(ans[0] ? ans[0] : 0);