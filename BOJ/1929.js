let [M, N] = require('fs').readFileSync('예제.txt').toString().split(" ").map(Number);
const isPrime = {1 : true};

// 범위가 클 경우 "에라토스테네스의 체" 방식을 사용하는 것이 효율
// 2 ~ N 까지 각 숫자가 소수가 아닌 수를 찾아 객체에 선언
// M ~ N 까지 for문으로 소수가 아닌 수를 찾은 객체를 순회하며 값 찾기
// 객체에서 값을 못찾음 -> 소수, 값 존재 -> 소수 X
// 1도 입력 가능 -> 1은 소수 아님

// 주어진 M의 제곱근까지 i의 배수들을 모두 true로 만들어줌
for (let i = 2 ; i <= Math.ceil(Math.sqrt(N)) ; i++) {
    if(isPrime[i]) {
        continue;
    }

    for(let j = i ** 2 ; j <= N ; j+=i) {
        isPrime[j] = true;
    }
}

for (let i = M; i <= N; i++) {
    if (!isPrime[i]) {
        console.log(i);
    }
}