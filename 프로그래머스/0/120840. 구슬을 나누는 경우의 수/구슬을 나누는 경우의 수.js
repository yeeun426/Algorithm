function solution(balls, share) {
    let answer = 1;
    for(let i = balls; i > share ; i--) answer *= i; 
    for(let i = 1 ; i <= balls - share ; i++) answer /= i;
    return Math.round(answer);
}


