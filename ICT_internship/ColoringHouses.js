let input = require('fs').readFileSync('예제.txt').toString().trim();

function countWaysToColorHouses(n) {
    const modulo = 1000000007;
    let ways = (6 * Math.pow(3, Math.floor(n / 2) - 1)) % modulo;
    return ways;
}

console.log(countWaysToColorHouses(+input));