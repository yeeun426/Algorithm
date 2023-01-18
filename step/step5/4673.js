function d(n) {
    let number = n;
    let result = 0;

    for (let i = 0; i < String(n).length; i++) {
        // number를 10으로 나눠가면서 각 자리수를 result에 합한다
        result += number % 10;
        number = Math.floor(number / 10);
    }
    return n + result;
}

// 0~10000 범위까지 셀프넘버 배열 생성 후 true로 초기화
let selfNumbers = Array(10000).fill(true);

// 셀프넘버가 아니면 false로 변환
// true인 경우만 출력
for (let i = 0 ; i < 10000 ; i++) {
    selfNumbers[d(i+1)] = false;
    
    if(selfNumbers[i+1]) {
        console.log(i+1);
    }
}