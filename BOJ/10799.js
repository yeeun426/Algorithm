let pieces = require('fs').readFileSync('예제.txt').toString().split("");

let answer = 0;
let sticks = [];

for(let i = 0 ; i < pieces.length; i++) {
    const iron = pieces[i];

    // 레이저 발사하면 쇠막대기 개수만큼 조각 생김
    if(iron === "(" && pieces[i+1] === ")") {
        answer += sticks.length;
        i++;

    // 쇠막대기 왼쪽 끝
    } else if (iron === "(") {
        sticks.push(iron);

    // 쇠막대기 오른쪽 끝 (조각 마지막 하나 더 생기면서 끝남)
    } else if (iron === ")") {
        sticks.pop();
        answer++;
    }
}

console.log(answer);