function grading(answers, ansArr, person) {
    let grade = 0;

    for(let i = 0 ; i < answers.length ; i++) {
        const index = i % person.length;
        if(answers[i] === person[index]) grade++;
    }
    ansArr.push([grade, person[0]]);   
}

function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    var answer = [];
    const ansArr = [];
    
    grading(answers, ansArr, first);
    grading(answers, ansArr, second);
    grading(answers, ansArr, third);
    
    ansArr.sort((a,b) => b[0] - a[0]);
    let max = ansArr[0][0];
    
    for(let i =0 ; i < ansArr.length ; i++) {
        if(ansArr[i][0] >= max) {
            answer.push(ansArr[i][1]);
            max = ansArr[i][0]
        }
    }
    
    return answer;
}