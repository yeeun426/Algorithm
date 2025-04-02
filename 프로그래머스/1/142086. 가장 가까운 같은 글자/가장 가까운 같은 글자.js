function solution(s) {
    const answer = [];
    const strObj = {};
    
    for(let i = 0 ; i < s.length ; i++) {
        if(strObj[s[i]] == undefined) {
            strObj[s[i]] = i;
            answer.push(-1);
        } else {
            answer.push(i - strObj[s[i]]);
            strObj[s[i]] = i;
        }
    }
    return answer;
}