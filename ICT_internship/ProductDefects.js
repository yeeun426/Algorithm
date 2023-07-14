let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
let samples = [];

for(let i = 0 ; i < input.length ; i++) {
    samples.push(input[i].split(" ").map(Number));
}

function findLargestSquareSize(samples) {
    const rowSize = samples.length; // 샘플[] 크기
    const colSize = samples[0].length; // 샘플[i][] 크기

    let largestSquare = 0;

    for (let i = 1; i < rowSize; i++) {
        for (let j = 1; j < colSize; j++) {
            if (samples[i][j] === 1) {
                samples[i][j] += Math.min(samples[i - 1][j - 1], samples[i - 1][j], samples[i][j - 1]);
                largestSquare = Math.max(largestSquare, samples[i][j]);
            }
        }
    }
    return largestSquare;
}


console.log(findLargestSquareSize(samples));