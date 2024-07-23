let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let [N, S] = input[0].split(" ").map(Number);
let num = input[1].split(" ").map(Number);
let answer = 0;

function dfs(L, sum) {
    if(L == N) {
        // 부분수열 원소들의 합이 S가 되는 부분수열의 개수 출력
        if(sum == S) {
            answer++;
        }
        return;
    } else {
        // 선택하지 않는 경우 두가지 경우를 모두 조회
        dfs(L+1, sum + num[L]);
        dfs(L+1, sum);
    }
}

dfs(0, 0);
// 아무것도 포함안한 부분집합의 경우를 제외시킴
if(S == 0) {
    answer--;
}
console.log(answer);
