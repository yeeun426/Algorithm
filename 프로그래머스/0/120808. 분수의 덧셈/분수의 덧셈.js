function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    function gcd(x, y) {
        return y === 0 ? x : gcd(y, x % y);
    }
    let lcm = (denom1 * denom2) / gcd(denom1, denom2);
    let numerator = numer1 * (lcm / denom1) + numer2 * (lcm / denom2);

    // 기약분수로 변환하기 위한 최대공약수 계산
    let commonGCD = gcd(numerator, lcm);
    
    // 기약분수로 나누기
    numerator /= commonGCD;
    lcm /= commonGCD;
    
    answer.push(numerator);
    answer.push(lcm); 
    
    return answer;
}
