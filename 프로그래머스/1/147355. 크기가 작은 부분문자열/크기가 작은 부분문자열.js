function solution(t, p) {
    var answer = 0;
    const length = p.split("").length;
    
    for(let i = 0 ; i < t.length - length + 1 ; i++) {
        if(t.slice(i, i + length) <= +p) answer++;
    }
    return answer;
}