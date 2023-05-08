let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let T = input.shift();

for(let i = 0 ; i < T ; i++) {
    const answer = [];
    const wordArray = input[i].split(" ");

    for(let j = 0 ; j < wordArray.length ; j++) {
        let a = wordArray[j].trim().split("").reverse();
        answer.push(a.join(""));
    }
    console.log(answer.join(" "));
}