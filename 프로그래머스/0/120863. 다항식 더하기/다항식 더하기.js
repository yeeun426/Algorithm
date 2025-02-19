function solution(polynomial) {
    var answer = ''
    const polyArr = polynomial.split(" + ");
    
    let x = 0;
    let num = 0;
    for(let p of polyArr) {
        if(p.includes("x")) {
            x += Number(p.split("x")[0]) || 1
        } else {
            num += Number(p)
        }
    }
    
    if (x > 0) answer += (x === 1 ? "x" : x + "x");
    if (num > 0) answer += (answer ? " + " : "") + num;
    
    return answer;
}