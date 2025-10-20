function solution(participant, completion) {
    var answer = '';
    const hashMap = new Map();
    
    for(let p of participant) {
        hashMap.set(p, (hashMap.get(p) || 0) + 1);
    }
    
    for(let c of completion) {
        hashMap.set(c, hashMap.get(c) - 1);
    }

    for(let [key, value] of hashMap) {
        if(value > 0) return key;
    }
    
    return answer;
}