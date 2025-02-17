function solution(num_list, n) {
    var answer = Array.from({ length: num_list.length / n }, () => []);
    
    for (let i = 0; i < num_list.length; i++) {
        answer[Math.floor(i / n)].push(num_list[i]);
    }
    return answer;
}