let input = require('fs').readFileSync('예제.txt').toString().trim();
let count = {};
let alphabet = input.toUpperCase();

for(i = 0 ; i < alphabet.length ; i++) {
    if(count[alphabet[i]] == undefined) {
        count[alphabet[i]] = 1;
    } else {
        count[alphabet[i]] ++;
    }
}

let result = "";
let cnt = 0;
for(char in count){ // count 전체 property를 확인해야함
    if(count[char] > cnt) {
        cnt = count[char];
        result = char;
        
    } else if (count[char] === cnt) {
        result = "?";
    }
}
console.log(result);