function solution(begin, target, words) {
    var answer = 0;
    const queue = [[begin, 0]];
    const visited = new Array(words.length).fill(false);

    if(words.indexOf(target) < 0) return 0;
        
    while(queue.length) {
        let [now, step] = queue.shift();
        if(now === target) return step;
        for(let i = 0 ; i < words.length ; i++) {
            let temp_cnt = 0 ;
            if(!visited[i]) {
                for(let j = 0 ; j < words.length ; j++) {
                     if(now[j] !== words[i][j]) temp_cnt++;
                }
                if(temp_cnt === 1) {
                    queue.push([words[i], ++step]);
                    visited[i] = true;
                }
            }
        }
    } 
    return answer;
}