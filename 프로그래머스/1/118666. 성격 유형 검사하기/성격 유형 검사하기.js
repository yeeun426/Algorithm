function solution(survey, choices) {
    let answer = "";
    const score = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    
    for(let i = 0 ; i < survey.length ; i++) {
        if(choices[i] < 4) {
            score[survey[i][0]] += (4 - choices[i]);
        } else { 
            score[survey[i][1]] += (choices[i]-4);
        }
    }
    
    const typeValue = Object.keys(score);
    for(let i = 0 ; i < typeValue.length ; i+=2) {
        if(score[typeValue[i]] >= score[typeValue[i+1]]) {
            answer += typeValue[i]
        } else {
            answer += typeValue[i+1]
        }
    }
    
    return answer;
}