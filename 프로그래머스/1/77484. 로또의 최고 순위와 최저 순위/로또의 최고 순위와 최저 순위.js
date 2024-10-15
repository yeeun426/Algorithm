function solution(lottos, win_nums) {
  var answer = [];
  let unknown = 0;
  let win = 0;

  for (let num of lottos) {
    if (num === 0) {
      unknown++;
      continue;
    }
    if (win_nums.includes(num)) win++;
  }

  if (win == 0 && unknown == 0) {
    answer = [6, 6];
  } else if (win == 0) {
    answer = [1, 6];
  } else {
    answer = [7 - win - unknown, 7 - win];
  }

  return answer;
}
