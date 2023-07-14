let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
let name = input[0].trim().split(" ");
let price = input[1].split(" ").map(Number);
let weight = input[2].split(" ").map(Number);


function numDuplicates(name, price, weight) {
    const duplicate = {};
    let answer = 0;

    for(let i = 0 ; i < name.length ; i++) {
        if(duplicate[`${name[i]},${price[i]},${weight[i]}`]) {
            duplicate[`${name[i]},${price[i]},${weight[i]}`]++;

            answer++;
        } else {
            duplicate[`${name[i]},${price[i]},${weight[i]}`] = 1;
        }
    }
    return answer;
}

// console.log(name, price, weight)
console.log(numDuplicates(name, price, weight));