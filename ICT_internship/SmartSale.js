let input = require('fs').readFileSync('예제.txt').toString().split("\n");
let m = Number(input[input.length-1]);
const ids = [];

for(let i = 1; i < input.length-1 ; i++) {
    ids.push(+input[i]);
}

// 가장 적게 나타나는 요소 순서대로 제거
const idsObj = {};

for (const a of ids) {
    if(!idsObj[a])  {
        idsObj[a] = 1;
    } else {
        idsObj[a] += 1;
    }
}

while(m > 0) {
    let minCount = Math.min(...Object.values(idsObj));

    if (m >= minCount) {
        let minKey = Object.keys(idsObj).find(key => idsObj[key] === minCount);
        delete idsObj[minKey];
        m -= minCount;
    } else {
        break;
    }    
}
console.log(Object.keys(idsObj).length);
