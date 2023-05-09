let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let n = input.shift();
const stack = [];
const answer = [];

stack.push(1);
answer.push("+");
let i = 2;
let j = 0;

while(j <= n-1) { 
    // 수열이 불가능한 경우
    if(stack[stack.length - 1] > input[j]) {
        answer.push("NO");
        break;
    }

    if(stack[stack.length - 1] == input[j]) {
        stack.pop();
        answer.push("-");
        j++;
    } else {
        stack.push(i);
        answer.push("+");
        i++;
    }
}

console.log(answer[answer.length - 1] == "NO" ? "NO" : answer.join("\n"));