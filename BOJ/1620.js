let input = require("fs").readFileSync("예제.txt").toString().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const solve = [];
const hashMap = {};

for(let i = 0 ; i < M ; i++) {
    solve.push(input[N + i]);
}

for (let i = 0; i < N; i++) {
    hashMap[input[i].toLowerCase()] = i + 1;
}

for(let i = 0 ; i < M ; i++) {
    if(!isNaN(solve[i])) {
        console.log(input[solve[i]-1]);
    } else {
        const index = hashMap[solve[i].toLowerCase()];
        if (index != undefined) {
            console.log(index);
        } else {
            console.log(-1);
        }
    }
}