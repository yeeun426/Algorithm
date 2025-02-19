function solution(lines) {
    let arr = new Array(201).fill(0);
    
    for (let [start, end] of lines) {
        for (let i = start; i < end; i++) {
            arr[i + 100]++;
        }
    }
    return arr.filter(v => v > 1).length;
}
