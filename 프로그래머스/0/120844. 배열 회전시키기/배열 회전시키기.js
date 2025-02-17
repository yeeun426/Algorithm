function solution(numbers, direction) {
    var answer = [];
    if(direction == "left") {
        const leftNum = numbers.shift()
        answer.push(...numbers);
        answer.push(leftNum);
    } else {
        answer.push(numbers.pop());
        answer.push(...numbers);
    }
    return answer;
}