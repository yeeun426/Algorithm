function solution(my_string, n) {
    var answer = '';
    for(let str of my_string) {
        answer += str.repeat(n);
    }
    return answer;
}