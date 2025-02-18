function solution(n) {
    var answer = [];
    let d = 2;
    while (n != 1) {
        if (n % d != 0) d++;
        else {
            n /= d;
            if(!answer.includes(d)) answer.push(d);
        }
    }
    return answer;
}