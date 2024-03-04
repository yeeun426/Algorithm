function solution(N, number) {
  var answer = 0;
  const set = new Array(9).fill().map(() => new Set());

  for (let i = 1; i <= 8; i++) {
    set[i].add(Number(`${N}`.repeat(i)));
    for (let j = 0; j < i; j++) {
      for (const cur of set[j]) {
        for (const val of set[i - j]) {
          set[i].add(cur + val);
          set[i].add(cur - val);
          set[i].add(cur * val);
          if (val !== 0) set[i].add(Math.floor(cur / val));
        }
      }
    }
    if (set[i].has(number)) {
      return i;
    }
  }
  return -1;
}