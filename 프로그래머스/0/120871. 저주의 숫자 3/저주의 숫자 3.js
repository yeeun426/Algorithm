function solution(n) {
    let answer = 0;
    let count = 0;
    
    while (count < n) {
        answer++; 
        if (!answer.toString().includes("3") && answer % 3 !== 0) {
            count++;
        }
    }
    return answer;
}
