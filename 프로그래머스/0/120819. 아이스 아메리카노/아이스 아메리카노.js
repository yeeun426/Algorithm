function solution(money) {
    const coffePrice = 5500;
    return [parseInt(money/coffePrice), money % coffePrice];
}