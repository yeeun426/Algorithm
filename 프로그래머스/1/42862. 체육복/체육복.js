function solution(n, lost, reserve) {
    var answer = 0;
    const students = new Array(n).fill(1);
    for(let l of lost) students[l-1]--;
    for(let r of reserve) students[r-1]++;

    for(let i = 0 ; i < students.length ; i++) {
        if(students[i] == 2 && students[i-1] == 0) {
            students[i] = 1;
            students[i-1] = 1;
        } else if(students[i] == 2 && students[i+1] == 0) {
            students[i] = 1;
            students[i+1] = 1;
        } 
    }
    
    return students.reduce((cur, cnt) => {
        if(cnt !== 0) cur++;
        return cur;
    },0);
}