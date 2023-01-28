// 10809 알파벳 찾기
let input = require('fs').readFileSync('예제.txt').toString().trim();
let answer = []

// 아스키코드 'a'는 97, 'z'는 122번
for(i = 97 ; i <= 122 ; i++) {
    answer.push(input.indexOf(String.fromCharCode(i)));
}

console.log(answer.join(" "));