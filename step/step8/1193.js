let X = +require('fs').readFileSync('예제.txt').toString().trim();
// 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → 1/3 -> 1/4 -> 2/3 -> 3/2 

// n번째 그룹이 짝수일 경우
// 분자는 오름차순(1, 2, 3, 4, ... , n)
// 분모는 짝수일 때 내림차순(n, ... , 4, 3, 2, 1)

// 몇번째 그룹에 속해 있는지 찾아야함
let groupCnt = 0;
let ans = [];

while(X > 0) {
    groupCnt++;
    X = X - groupCnt;
}
console.log(X, groupCnt);
// for (let i = 0; i < groupCnt ; i++) {
    ans.push(X + groupCnt);
    ans.push(groupCnt+1 - ans[0]);
// }

console.log(ans);