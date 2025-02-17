function solution(n) {
    var answer = 0;
    
    for(let i = 1 ; i <= n ; i++) {
        if(isChecked(i)) answer++; 
    }

    return answer;
}

function isChecked(num) {
    let cnt = 0;
    for(let i = 1 ; i <= num ; i++) {
        if(num % i == 0) cnt++;
    }
    return cnt >= 3 ? true : false;
}
