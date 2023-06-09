let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let M = Number(input[1]);

// 커서를 기준으로 왼쪽 오른쪽 나눔
let left = input[0].trim().split("");
let right = [];

for(let i = 2 ; i < 2 + M ; i++) {
    const command = input[i].trim().split(" ")[0];
    switch(command) {
        case "L" :
            if(left.length) right.push(left.pop());
            break;
        case "D" :
            if(right.length) left.push(right.pop());
            break;
        case "B" :
            if(left.length) left.pop();
            break;
        case "P" :
            left.push(input[i].trim().split(" ")[1]);
            break;
        default :
            break;
    }
}


console.log(`${left.join("")}${right.reverse().join("")}`);