function solution(lottos, win_nums) {
  let rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  let win = 0;
  let unknow = 0;

  for (let num of lottos) {
    if (num === 0) {
      unknow++;
      continue;
    }
    if (win_nums.includes(num)) win++;
  }
  let answer = [rank[win + unknow], rank[win]];

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
