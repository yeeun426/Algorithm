function solution(participant, completion) {
    var answer = '';

    
    for(let i = 0 ; i < completion.length ; i++) {
        let idx = participant.indexOf(completion[i]);
        participant.splice(idx, 1);
    }
    answer += participant[0]
    return answer;
}