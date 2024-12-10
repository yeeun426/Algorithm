function solution(X, Y) {
  var answer = "";
  const cntX = {};
  const cntXY = {};

  for (const x of X) {
    if (!cntX[x]) cntX[x] = 1;
    else cntX[x]++;
  }

  for (const y of Y) {
    if (!cntX[y]) continue;
    if (!cntXY[y]) cntXY[y] = 1;
    else if (cntX[y] > cntXY[y]) cntXY[y]++;
  }

  const sortedXY = Object.entries(cntXY).sort(
    (a, b) => Number(b[0]) - Number(a[0]),
  );

  if (sortedXY.length == 0) return "-1";
  if (sortedXY[0][0] == 0) return "0";
  for (const [num, cnt] of sortedXY) {
    answer += num.repeat(cnt);
  }

  return answer;
}