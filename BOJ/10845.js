let [N, ...input] = require('fs').readFileSync('예제.txt').toString().trim().split("\n");

let queue = [];
let result = [];

for(let i = 0 ; i < N ; i++) {
    const command = input[i].trim().split(" ")[0];
    switch(command) {
        case 'push' :
            queue.push(+input[i].split(" ")[1]);
            break;

        case 'pop' :
            result.push(queue.shift() || -1);
            break;

        case 'size' :
            result.push(queue.length);
            break;

        case 'empty' :
            result.push(queue[0] ? 0 : 1);
            break;

        case 'front' :
            result.push(queue[0] || -1);
            break;

        case 'back' :
            result.push(queue[queue.length-1] || -1);
            break;

        default :
            break;
   }
}

console.log(result.join("\n"))