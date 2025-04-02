function solution(array, commands) {
    var answer = [];
    
    for(let a = 0 ; a < commands.length ; a++) {
        const [i, j, k] = commands[a];
        const newArr = array.slice(i-1, j);
        newArr.sort((a,b) => a-b);
        answer.push(newArr[k-1]);
    }
    return answer;
}