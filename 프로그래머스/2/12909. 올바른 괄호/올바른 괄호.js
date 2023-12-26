function solution(s){
    var answer = true;
    const stack = [];    
    for(let i = 0 ; i < s.length ; i++) {
        if(s[0] === ")") {
            answer = false;
            break;
        }
        if(s[i] === "(") stack.push(s[i]);
        else if(s[i] === ")") stack.pop();
    }
    if(stack.length) answer = false
    return answer;
}