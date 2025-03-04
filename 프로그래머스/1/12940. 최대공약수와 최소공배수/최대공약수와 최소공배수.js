function solution(n, m) {    
    function gcd(a, b) {
        while (b != 0) {
            let r = a % b;
            a = b;
            b = r;
        }
        return a;
    }

    function lcm(a, b) {
        return a * b / gcd(a, b);
    }

    return [gcd(n,m), lcm(n,m)];
}