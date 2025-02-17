function solution(my_string) {
    var answer = '';
    for(let str of my_string) {
        if(!answer.includes(str)) answer += str;
    }
    return answer;
}