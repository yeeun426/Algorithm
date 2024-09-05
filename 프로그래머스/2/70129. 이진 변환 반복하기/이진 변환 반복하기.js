function solution(s) {
    var answer = [];
    let zero = s.length;
    let cnt = 0;
    let zero_sum = 0;
    
    while(s !== "1") {
        s = s.split("0").join("");
        zero -= s.length;
        zero_sum += zero;
        
        s = s.length.toString(2)
        zero = s.length;
        cnt++;
    }
    
    answer.push(cnt, zero_sum)
    
    return answer;
}