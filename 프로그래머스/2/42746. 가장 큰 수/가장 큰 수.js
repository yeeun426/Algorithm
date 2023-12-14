function sortedStr(a,b) {
    const sort1 = a + b;
    const sort2 = b + a;
    
    return sort2 - sort1
}

function solution(numbers) {
    var answer = '';
    const sortNumbers = numbers.map(String).sort(sortedStr);
    answer = sortNumbers.join("");
    
    return answer[0] === '0'  ? '0' : answer;
}