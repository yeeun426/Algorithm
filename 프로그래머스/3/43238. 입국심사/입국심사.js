function solution(n, times) {
    times.sort((a,b) => a-b); 
    let start = 1;
    let end = n * times[times.length -1]; // 최대 시간
    let answer = end;
    
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        let count = 0
        times.forEach(value => {
            count += Math.floor(mid / value); 
        });
        if (count < n) start = mid + 1;
        else end = mid - 1;
    }
    return start;
}
