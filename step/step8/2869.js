let [A, B, V] = require('fs').readFileSync('예제.txt').toString().split(" ").map(Number);

// 2 -> 1 /-> 3 -> 2 /-> 4 -> 3 / -> 5
// 2 1 5
let days = 0;

// (높이 - 밤에 미끄러지는 수) / (아침에 이동하는 수 - 밤에 미끄러지는 수)
days = Math.ceil((V - B)/(A - B));

console.log(days);

//시간초과
// let tree = 0;

// while (tree < V) {
//     day++;
//     tree += A;
//     if(tree == V) break;
//     tree -= B;
// } 

// console.log(day);