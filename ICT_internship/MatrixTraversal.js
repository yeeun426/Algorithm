let input = require('fs').readFileSync('예제.txt').toString().split("\n");

let mat = input.map(v => v.split(" ").map(Number));
let answer = [];

for(let x = 0 ; x < 4 ; x++) {
    const sum = [];
    // sum.push(mat[0][x]);
    let basedNum = x;

    for(let y = 0 ; y < 3 ; y++) {
        const minObj = {};      
        
        if(mat[y+1][basedNum-1] !== undefined) minObj[basedNum-1] = mat[y+1][basedNum-1];
        minObj[basedNum]=mat[y+1][basedNum];
        if(mat[y+1][basedNum+1] !== undefined) minObj[basedNum+1] = mat[y+1][basedNum+1];

        let minColumn = Math.min(...Object.values(minObj));
        sum.push(minColumn);
        basedNum = mat[y+1].indexOf(minColumn);
    }
    answer.push(sum.reduce((a,b) => (a+b), mat[0][x]));
}
console.log(100-Math.min(...answer));

// function maxEnergy(mat) {
//     let sum = [];
//     // 첫번째 행에서 가장 작은수의 index
//     let basedNum = mat[0].indexOf(Math.min(...mat[0]));
//     sum.push(mat[0][basedNum]);

//     for(let i = 1 ; i < mat.length ; i++) {
//         const minObj = {};

//         if(mat[i][basedNum-1] !== undefined) minObj[basedNum-1] = mat[i][basedNum-1];
//         minObj[basedNum]=mat[i][basedNum];
//         minObj[basedNum+1]=mat[i][basedNum+1];
        
//         let minColumn = Math.min(...Object.values(minObj));
//         sum.push(minColumn);
//         basedNum = mat[i].indexOf(minColumn);
//     }
//     return 100 - sum.reduce((a,b) => (a+b));
// }