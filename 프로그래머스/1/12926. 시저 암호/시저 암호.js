function solution(s, n) {
    var answer = '';
    const arr = s.split("");
    
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i].charCodeAt() == 32) {
            answer += " ";
        } else if(arr[i].charCodeAt() + n > 90 && arr[i].charCodeAt() <= 90) {
            answer += String.fromCharCode(65 + ((arr[i].charCodeAt() + n) % 90) - 1);
        } else if(arr[i].charCodeAt() + n > 122) {
            answer += String.fromCharCode(97 + ((arr[i].charCodeAt() + n) % 122) - 1);
        } else {
            answer += String.fromCharCode(arr[i].charCodeAt() + n);
        }
    }
    return answer;
}