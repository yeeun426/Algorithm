let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n").map(Number).sort((a,b) => a-b);

if (input[0] + input[1] + input[2] === 180) {
    if(input[0] == input[1] && input[1] == input[2]) {
        console.log('Equilateral');
    } else if(input[0] == input[1] || input[1] == input[2]) {
        console.log('Isosceles');
    } else {
        console.log('Scalene');
    }

} else{
    console.log('Error');
}