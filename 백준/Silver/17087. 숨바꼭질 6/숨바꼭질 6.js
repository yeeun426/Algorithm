let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const [N, S] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const distance = [];

for (let i = 0 ; i < N ; i++) {
    let dist = Math.abs(S - A[i]);
    distance.push(dist);
}

function GCD(a, b){
    while(b != 0){
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
  
if(N == 1) {
    console.log(distance[0])
} else { 
    let gcd = GCD(distance[0], distance[1]);
    for(let i = 1; i < distance.length; i++){
        gcd = GCD(gcd,distance[i]);
    }
  console.log(gcd)
}