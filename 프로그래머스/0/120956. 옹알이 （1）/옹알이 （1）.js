function solution(babbling) {
    let answer = 0;
    for(let b of babbling) {
        let str = b;
        for (const i of ["aya", "ye", "woo", "ma"]){
            str = str.replaceAll(i, "1");
        }
        if (/^[1]+$/.test(str)) answer += 1; // "1"로만 이루어진 경우 카운트
    }
    return answer;
}