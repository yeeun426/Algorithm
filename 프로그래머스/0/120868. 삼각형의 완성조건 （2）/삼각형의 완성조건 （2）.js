function solution(sides) {
    var answer = 0;
    sides.sort((a,b) => a - b);
    
    // 가장 긴 변이 a[1]인 경우
    let small = sides[1] - sides[0] + 1;
    answer += sides[1] - small + 1;
    
    // 나머지 한 변이 긴 변인 경우
    let big = sides[0] - 1;
    answer += big;
    
    return answer;
}