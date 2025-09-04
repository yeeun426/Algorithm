function HandleSliceArr(array,i,j) {
    const sliceArr = array.slice(i-1,j);
    return sliceArr.sort((a,b) => a-b);
}
function solution(array, commands) {
    var answer = [];
    
    for(let p = 0 ; p < commands.length ; p++) {
        const [i,j,k] = commands[p]
        const sliceArr = HandleSliceArr(array, i,j);
        answer.push(sliceArr[k-1])
    }
    
    return answer;
}