function solution(land) {
  var landLen = land.length;

  for (var i = 0; i < landLen - 1; i++) {
    land[i + 1][0] += Math.max(land[i][1], land[i][2], land[i][3]);
    land[i + 1][1] += Math.max(land[i][0], land[i][2], land[i][3]);
    land[i + 1][2] += Math.max(land[i][0], land[i][1], land[i][3]);
    land[i + 1][3] += Math.max(land[i][0], land[i][1], land[i][2]);
  }

  let answer = land[land.length - 1];
  return Math.max(...answer);
}

console.log(
  solution([
    [6, 7, 1, 2],
    [2, 3, 10, 8],
    [1, 3, 9, 4],
    [7, 11, 4, 9],
  ]),
);
