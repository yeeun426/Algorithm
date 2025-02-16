function solution(my_string) {
    var answer = 0;
    for(let str of my_string.split("")) {
        let number = Number(str);
        if(number > 0) answer += number;
    }
    return answer;
}