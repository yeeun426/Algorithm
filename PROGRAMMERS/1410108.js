function solution(s) {
  let answer = 0;
  let idx = 0;
  let first = s[0];
  let firstCnt = 0;
  let otherCnt = 0;

  while (idx < s.length) {
    first === s[idx] ? firstCnt++ : otherCnt++;
    idx++;

    if (idx == s.length) {
      answer++;
      break;
    }

    if (firstCnt == otherCnt) {
      answer++;
      firstCnt = 0;
      otherCnt = 0;
      first = s[idx];
    }
  }
  return answer;
}

console.log(solution("abracadabra"));
