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