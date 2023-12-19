function solution(arr)
{
    var answer = [];
    for(let i = 1 ; i <= arr.length ; i++) {
        if(answer[answer.length-1] !== arr[i-1]) answer.push(arr[i-1]);
    }
    
    return answer;
}