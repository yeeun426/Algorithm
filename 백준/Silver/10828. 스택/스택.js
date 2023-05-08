let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let N = +input.shift();

const result = [];
const stack = [];

for(let i = 0 ; i < N ; i++) {
    const command = input[i].trim().split(" ")[0];
    switch(command) {
        case 'push' :
            stack.push(input[i].split(" ")[1]);
            break;

        case 'pop' :
            result.push(stack.pop() || -1);
            break;

        case 'size' :
            result.push(stack.length);
            break;

        case 'empty' :
            result.push(stack.length !== 0 ? 0 : 1);
            break;

        case 'top' :
            result.push(stack[stack.length-1] || -1);
            break;

        default :
            break;
   }
}

console.log(result.join("\n"));