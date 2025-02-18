function solution(my_str, n) {
    const regex = new RegExp(`.{1,${n}}`, 'g');
    return my_str.match(regex);
}