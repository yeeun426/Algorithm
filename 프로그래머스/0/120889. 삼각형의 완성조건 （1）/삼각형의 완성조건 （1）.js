function solution(sides) {
    var answer = 0;
    sides.sort((a,b) => a-b);
    
    if(sides[0] + sides[1] > sides[2]) return 1
    return 2;
}