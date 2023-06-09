let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let N = +input.shift();

const result = [];
const deque = [];

for(let i = 0 ; i < N ; i++) {
    const command = input[i].trim().split(" ")[0];
    const frontDQ = []
    
    switch(command) {
        case 'push_front' :
            deque.unshift(+input[i].split(" ")[1])
            break;

        case 'push_back' :
            deque.push(+input[i].split(" ")[1]);
            break;

        case 'pop_front' :
            result.push(deque.shift() || -1);
            break;

        case 'pop_back' :
            result.push(deque.pop() || -1);            
            break;

        case 'size' :   
            result.push(deque.length);
            break;

        case 'empty' :
            result.push(deque.length ? 0 : 1);
            break;

        case 'front' :
            result.push(deque[0] || -1);
            break;

        case 'back' :
            result.push(deque[deque.length-1] || -1);
            break;

        default :
            break;
   }
}

console.log(result.join("\n"));