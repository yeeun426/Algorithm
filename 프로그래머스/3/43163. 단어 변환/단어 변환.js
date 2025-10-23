function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    const queue = [[begin, 0]]; // [현재 단어, 단계 수]
    const visited = new Set();
    
    const canConvert = (a,b) => {
        let diff = 0;
        for (let i = 0 ; i < a.length ; i++) {
            if(a[i] !== b[i]) diff++;
            if(diff > 1) return false;
        }
        return diff === 1;
    }
    
    while (queue.length > 0) {
        const [word, cnt] = queue.shift();
        
        if (word === target) return cnt;
        
        for (const next of words) {
            if(!visited.has(next) && canConvert(word, next)) {
                visited.add(next);
                queue.push([next, cnt+1]);
            }
        }
    }
    
    return 0;
}