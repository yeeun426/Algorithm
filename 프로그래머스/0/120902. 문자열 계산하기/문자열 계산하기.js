function solution(my_string) {
    const strArr = my_string.split(" ");
    let answer = Number(strArr[0]);
    for(let i = 1 ; i < strArr.length ; i+=2) {
        if(strArr[i] == "+") {
            answer += Number(strArr[i+1]);
        } else {
            answer -= Number(strArr[i+1])
        }
    }
    return answer;
}
