function solution(num, k) {
    const numArr = num.toString().split("").map(Number)
    return numArr.indexOf(k) >= 0 ?  numArr.indexOf(k)+1 :  -1;
}

