function solution(n) {
  var answer = 0;
  let bigNum = n + 1;
  const one_num = n.toString(2).split(0).join("").length;
  while (bigNum <= 1000000) {
    if (one_num === bigNum.toString(2).split(0).join("").length) {
      answer = bigNum;
      break;
    }
    bigNum++;
  }

  return answer;
}