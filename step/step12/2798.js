let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
// N장의 카드를 모두 숫자가 보이도록 바닥에 놓음
// N장의 카드 중 3장을 골라 더한다
// 카드 합이 M을 넘지 않으면서 M과 최대한 가깝게 만들어야함
let [N, M] = input[0].trim().split(' ').map(Number);
const cards = input[1].trim().split(' ').map(Number);
let max = 0;
const answer = [];

for(let i = 0 ; i < N ; i++) {
    answer.push(cards[i]);
    for(let j = i+1 ; j < N ; j++) {
        answer.push(cards[j]);
        for(let n = j+1; n < N ; n++) {
            answer.push(cards[n]);
            add = function(arr) {
                return arr.reduce((a, b) => a + b, 0);
            };
             
            if(add(answer) > max && add(answer) <= M) {
                max = add(answer);
            }            
            answer.pop();
        }
        answer.pop();
    }
    answer.pop();
}
console.log(max);