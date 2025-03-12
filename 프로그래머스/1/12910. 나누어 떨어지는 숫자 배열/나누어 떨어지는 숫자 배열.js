function solution(arr, divisor) {
    var answer = [];
    
    for(let num of arr) {
        if(num % divisor == 0) {
            answer.push(num)
        }
    }
    
    return answer.length ? answer.sort((a,b) => a-b) : [-1];
}