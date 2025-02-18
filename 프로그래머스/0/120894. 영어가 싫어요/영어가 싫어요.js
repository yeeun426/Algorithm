function solution(numbers) {
    var answer = 0;
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let idx in numArr) {
        numbers = numbers.replaceAll(numArr[idx], idx.toString());
    }
    return Number(numbers);
}