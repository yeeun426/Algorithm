function solution(brown, yellow) {
    var answer = [];
    const total = brown + yellow;
    
    for(let i = 3 ; i <= total/2 ; i++) {
        const height = i;
        const width = total / height;
        
        if((height - 2) * (width - 2) === yellow) {
           answer.push(width, height);
            break;
        }
    }
    
    return answer;
}