function solution(my_string) {
    return my_string.split("").filter((value) => !isNaN(value)).map(Number).sort((a,b) => a-b);
}