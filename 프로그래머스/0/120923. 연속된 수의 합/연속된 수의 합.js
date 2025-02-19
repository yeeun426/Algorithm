function solution(num, total) {
    var answer = []; 
    let sum = (num * (num + 1)) / 2;
    let start = 1;

    while(sum !== total) {
        if(sum < total) {
            sum -= start++;
            sum += (start + num - 1);
        } else {
            sum -= (start + num - 1);
            sum += --start;
        }
    }
        
    for (let i = 0; i < num; i++) {
        answer.push(start + i);
    }

    return answer;
}