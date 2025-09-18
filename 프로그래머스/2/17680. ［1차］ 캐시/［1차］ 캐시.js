function solution(cacheSize, cities) {
  var answer = 0;
  const cacheMap = new Map();

  if (cacheSize === 0) return cities.length * 5;
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    const idx = cacheMap.get(city);
    if (idx !== undefined) {
      cacheMap.delete(city);
      cacheMap.set(city, i);
      answer += 1;
    } else {
      if (cacheMap.size >= cacheSize && cacheSize > 0) {
        const oldestCity = [...cacheMap.entries()].reduce((a, b) =>
          a[1] < b[1] ? a : b,
        )[0];
        cacheMap.delete(oldestCity);
      }
      cacheMap.set(city, i);
      answer += 5;
    }
  }
  return answer;
}
