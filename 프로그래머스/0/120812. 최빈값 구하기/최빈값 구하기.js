function solution(array) {
    var answer = 0;
    const cntObj = {}
    
    for(let i = 0 ; i < array.length ; i++) {
        cntObj[array[i]] = (cntObj[array[i]] || 0) + 1;
    }
    
    const sorted = Object.entries(cntObj).sort((a, b) => b[1] - a[1]); // entries : 객체를 배열로 변환
    return (sorted.length > 1 && sorted[0][1] === sorted[1][1]) ? -1 : Number(sorted[0][0]);
}