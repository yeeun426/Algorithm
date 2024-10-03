function solution(cacheSize, cities) {
  var answer = 0;
  const stack = [];
  cities = cities.join(",").toLowerCase().split(",");

  for (let i = 0; i < cities.length; i++) {
    if (cacheSize === 0) return cities.length * 5;
    let index = stack.indexOf(cities[i]);

    if (stack.length < cacheSize && index < 0) {
      stack.push(cities[i]);
      answer += 5;
    } else {
      if (index >= 0) {
        answer += 1;
        stack.splice(index, 1);
      } else {
        answer += 5;
        stack.shift();
      }
      stack.push(cities[i]);
    }
  }
  return answer;
}

console.log(solution(2, ["a", "a", "a", "b", "b", "b", "c", "c", "c"]));
