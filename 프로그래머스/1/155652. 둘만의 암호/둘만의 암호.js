function solution(s, skip, index) {
    var answer = '';
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const isInclude = alphabet.filter(x => !skip.includes(x));
    
    for(let i = 0 ; i < s.length ; i++) {
        let alphaIdx = isInclude.indexOf(s[i]) + index;
        
        if(alphaIdx < isInclude.length) {
            answer += isInclude[alphaIdx];
        } else {
            answer += isInclude[alphaIdx%isInclude.length]; 
        }
    }
    
    return answer;
}