function solution(s) {
    var answer = '';
    
    const s_arr = s.split(" ").map(Number).sort((a,b) => a-b);
    answer += `${s_arr[0]} ${s_arr[s_arr.length-1]}`
    
    return answer;
}