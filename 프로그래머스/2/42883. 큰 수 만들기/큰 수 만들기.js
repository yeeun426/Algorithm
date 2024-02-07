function solution(number, k) {
    let answer = '';
    let numArr = number.split("");

    const result = [];

    for (let i = 0; i < numArr.length; i++) {
        const current = numArr[i];

        while (k > 0 && result.length > 0 && result[result.length - 1] < current) {
            result.pop();
            k--;
        }
        result.push(current);
    }

    result.splice(result.length - k, k);

    answer = result.join('');
    return answer;
}

// 내가 짠 코드
// function solution(number, k) {
//     var answer = '';
//     let numArr = number.split("").sort();
//     const idx = [];
    
//     for(let j = 0 ; j < number.length ; j++) {
//         const maxIdx = number.indexOf(numArr[numArr.length - 1 - j]); 
//         if(maxIdx <= k) {
//             number = number.slice(maxIdx); // 수정: maxIdx부터가 아닌 maxIdx+1부터 자름
//             numArr = number.split("").sort();
//             k -= maxIdx;
//             break;
//         }
//     }
//     const str = number.split("");
    
//     for(let i = 0 ; i < k ; i++) {
//         idx.push(str.indexOf(numArr[i]));
//         str[idx[i]] = "-1"; 
//     }

//     for(let i = 0 ; i < idx.length ; i++) {
//         const index = idx[i]
//         number = number.slice(0, index) + number.slice(index + 1);
//     }
//     return number;
// }
