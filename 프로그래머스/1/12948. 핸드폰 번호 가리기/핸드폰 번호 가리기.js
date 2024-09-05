function solution(phone_number) {
    var answer = '';
    const num_length = phone_number.length;
    
    answer += "*".repeat(num_length-4);
    answer += phone_number.slice(num_length-4, num_length)
    return answer;
}