function solution(name, yearning, photo) {
    var answer = [];
    let memory = {};
    
    for(let i = 0; i < name.length ; i++) {
        if(!memory[name[i]]) {
            memory[name[i]] = yearning[i];
        }
    }
    
    for(let p = 0 ; p < photo.length ; p++) {
        let score = 0;
        let photoArr = photo[p];
        for(let q = 0 ; q < photoArr.length ; q++) {
            if(memory[photoArr[q]]) {
                score += memory[photoArr[q]]
            }
        }
        answer.push(score);
    }
    return answer;
}