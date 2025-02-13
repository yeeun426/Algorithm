function solution(n, k) {
    if(n >= 10) k -= parseInt(n / 10);
    let price = n * 12000 + k * 2000;
    return price;
}