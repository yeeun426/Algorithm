let [N, losses] = require('fs').readFileSync('/dev/stdin').toString().split("\n");
lossList = losses.split(" ").map(BigInt).sort((a,b) => (a < b ? -1 : 1));

let loss = 0;
let maxLoss = 0;

if (N % 2 != 0) {
    lossList.pop();
    N -= 1
}

for(let i = 0 ; i < N ; i++) {
    loss = lossList[i] + lossList[N-(1+i)];
    if(maxLoss < loss) maxLoss = loss;
}

console.log(maxLoss.toString());