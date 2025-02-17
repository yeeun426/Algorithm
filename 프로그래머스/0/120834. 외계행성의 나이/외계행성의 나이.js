function solution(age) {
    var answer = '';
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const ageArr = age.toString().split("").map(Number);
    answer += ageArr.map((age) => alphabet[age]).join("");
    return answer;
}