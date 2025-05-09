// BOJ 1992
let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

const N = +input.shift()
const videos = input.map(v => v.split("").map(Number));
const answer = [];

function recursion(n, x, y) {
    let total = 0;

    for(let i = 0; i < n ; i++) {
        for(let j = 0 ; j < n ; j++) {
            total += videos[y+j][x+i];
        }
    }
    // 모두 같은 색이면 answer에 추가
    if (total === 0) answer.push(0);
    else if (total === n * n) answer.push(1);
    // 같은 색이 아닌 경우 화면 분할하여 함수 호출
    else{
        n /= 2;
        answer.push("(");
        recursion(n, x, y);
        recursion(n, x + n, y);
        recursion(n, x, y+n);
        recursion(n, x+n, y+n);
        answer.push(")");
    }
}

recursion(N, 0, 0);

console.log(answer.join(""));