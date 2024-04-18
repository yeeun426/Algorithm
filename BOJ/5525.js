let [N, M, S] = require("fs").readFileSync("예제.txt").toString().split("\n");
let answer = 0;

let [left, right] = [0, 0];
while (right < M) {
    if (S.slice(right, right + 3) === 'IOI') {
        right += 2;
        if (right - left === 2 * N) {
            answer += 1;
            left += 2;
        }
    } else {
        left = right = right + 1;
    }
}

console.log(answer);

// 50점 답안 O(N*M)
// let strP = "";
// for (let i = 0; i < +N ; i++) {
//     strP += "IO";
//     if(i === N-1) strP += ("I");
// }

// for (let i = 0 ; i < +M ; i++) {
//     const word = S.substring(i, strP.length + i);
//     if(word.length < strP.length) break;
//     if(word === strP) answer++;
// }

// console.log(answer)