function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const pieces = numbers.split("").map(Number);
  const primeSet = new Set(); // 중복 허용안함

  function makeNumber(current, visited) {
    if (current.length > 0) {
      const num = parseInt(current.join(""));
      if (isPrime(num)) primeSet.add(num); // 소수인 경우
    }

    for (let i = 0; i < pieces.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        current.push(pieces[i]);
        makeNumber(current, visited);
        current.pop();
        visited[i] = false;
      }
    }

    return primeSet.size;
  }
  
  return makeNumber([], new Array(pieces.length).fill(false));;
}
