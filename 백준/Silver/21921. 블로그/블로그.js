// 슬라이딩 윈도우
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, X] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

let total = 0;
for(let i = 0 ; i < X ; i++) {
    total += visitors[i];
}

let max = total
let maxDay = 1;
for(let j = X ; j < N ; j++) {
    total += visitors[j]-visitors[j-X];
    
    // 최대 방문자였던 기간
    if(max === total) maxDay++ ;  // 현재 최대치와 동일하면 카운팅
    else if(max < total){ // 현재 최대치보다 크면
        maxDay = 1; // 카운팅하던거 갱신
        max = total; // max값을 변경
    }
}

if(max === 0) {
    console.log("SAD")
} else {
    console.log(max); 
    console.log(maxDay);
}