function solution(array, commands) {
    var answer = [];
    
    for(let p = 0 ; p < commands.length ; p++) {
        let [i, j, k] = commands[p];
        const sliceArr = array.slice(i-1,j).sort((a,b) => a-b);
        answer.push(sliceArr[k-1])
    }
    return answer;
}