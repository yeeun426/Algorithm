let [N, M, S] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
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