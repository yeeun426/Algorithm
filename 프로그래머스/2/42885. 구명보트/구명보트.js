function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => a - b);

    while(people.length > 0 ) {
        if(people.length === 1) {
            answer++;
            break;
        }
        if(people[0] + people[people.length-1] <= limit) {
            people.shift();
            people.pop();
        } else {
            people.pop();
        }
        answer++;
    }
    return answer;
}