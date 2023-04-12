let [x, y, w, h] = require('fs').readFileSync('예제.txt').toString().trim().split(" ").map(Number);
let ans = [];

ans.push(x);
ans.push(w - x);
ans.push(y);
ans.push(h-y);

console.log(Math.min(...ans));