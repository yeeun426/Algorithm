function solution(n) {
    var answer = 0;
    let i = 1;
    while(true) {
        let pizza = 6 * i;
        answer++;
        if(pizza % n == 0) return answer = i;
        i++;
    }
    return answer;
}

