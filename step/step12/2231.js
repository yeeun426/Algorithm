let input = +require('fs').readFileSync('예제.txt').toString().trim();
// 198 + 1 + 9 + 8 = 198 + 18 = 216
const ans = 0;
for(let i = 0 ; i < input-1 ; i++) {
    const answer = i.toString().split("").reduce((acc,cur) => acc += Number(cur), 0);
    if(answer+i === input) {
        console.log(i);
        break;
    }
    if(i === input-1) {
        console.log(0);
        break;
    }
}