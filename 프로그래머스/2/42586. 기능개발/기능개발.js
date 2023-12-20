function solution(progresses, speeds) {
    var answer = [];
    const remainingArr = [];
    for(let i = 0 ; i < progresses.length ; i++) {
        remaining = 100-progresses[i];
        remainingArr.push(Math.ceil(remaining/speeds[i]));
    }
    
    let maxDay = remainingArr[0];
    let deployCnt = 1;
    for (let i = 1; i < remainingArr.length; i++) {
        if (maxDay >= remainingArr[i] ) {
            deployCnt++;
        } else {
            answer.push(deployCnt);
            deployCnt = 1;
            maxDay = remainingArr[i];
        }
    }
    answer.push(deployCnt);
    return answer;
}