function solution(n, t, m, p) {
  var answer = "";
  let i = 0;
  let tubeArr = "";

  while (i <= m * t) {
    let formation = i.toString(n).toUpperCase();
    tubeArr += formation;
    i++;
  }

  for (let i = 0; i < t; i++) {
    answer += tubeArr[p - 1];
    p += m;
  }
  return answer;
}
