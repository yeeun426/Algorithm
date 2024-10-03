function solution(n, k) {
  var answer = 0;
  const prime = n.toString(k).split(0).map(Number);

  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) return false;
    }
    return true;
  }

  for (let i = 0; i < prime.length; i++) {
    if (prime[i] === 1 || prime[i] === 0) continue;
    if (isPrime(prime[i])) answer++;
  }

  return answer;
}

console.log(solution(110011, 10));
