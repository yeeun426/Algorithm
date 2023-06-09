let [N, A] = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const Alist = A.split(" ").map(Number);

const stack = [];
const obj = {};
const answer = Array(+N).fill(-1);
const freq = Array(+N).fill(0);

for(let i = 0 ; i < N ; i++) {
    {obj[Alist[i]] ? obj[Alist[i]]++ : obj[Alist[i]]=1}
}

for(let i = 0 ; i < N ; i++) {
    freq[i] = obj[Alist[i]];

    while(stack.length && freq[stack[stack.length-1]] < freq[i]) {
        answer[stack.pop()] = Alist[i]
    }
    stack.push(i)
}
console.log(answer.join(" "));