let input = require('fs').readFileSync('예제.txt').toString().split("\n");

for(let i = 0 ; i < input.length ; i++) {
    let [first, second] = input[i].split(" ").map(Number);
    
    if(first === 0 && second === 0) break;
    
    if (first % second == 0) {
        console.log("multiple");
    } else if (second % first == 0){
        console.log("factor");
    } else {
        console.log("neither");
    }
}