function solution(n, t, m, p) {
    var answer = '';
    let cnt = 0;
    let idx = p;
    let allStr = "";
    
    while (cnt <= m * t) {
        allStr += cnt.toString(n).toUpperCase();
        cnt++;    
        if(allStr.length > m * t) break;
    }

    for(let i = 0 ; i < t ; i++) {
        answer += allStr[idx-1];
        idx += m;
    }
    return answer;
}