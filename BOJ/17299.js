let [N, A] = require('fs').readFileSync('예제.txt').toString().split("\n");
const Alist = A.split(" ").map(Number);
const freqList = Array(+N).fill(0);

const stack = [];
const obj = {};
const answer = Array(+N).fill(-1);

for(let i = 0 ; i < N ; i++) {
    {obj[Alist[i]] ? obj[Alist[i]]++ : obj[Alist[i]]=1}
}

for(let i = 0 ; i < N ; i++) {
    freqList[i] = obj[Alist[i]];

    while(stack.length && freqList[stack[stack.length-1]] < freqList[i]) {
        answer[stack.pop()] = Alist[i]
    }
    stack.push(i)
}
console.log(answer.join(" "));