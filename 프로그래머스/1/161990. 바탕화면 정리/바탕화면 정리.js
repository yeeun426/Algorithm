function solution(wallpaper) {
  var answer = [];
  let xArr = [51, -1];
  let yArr = [51, -1];

  for (let x = 0; x < wallpaper.length; x++) {
    for (let y = 0; y < wallpaper[x].length; y++) {
      if (wallpaper[x][y] !== "#") continue;

      if (x < xArr[0]) {
        xArr[0] = x;
      } else if (x > xArr[1]) {
        xArr[1] = x;
      }

      if (y < yArr[0]) {
        yArr[0] = y;
      } else if (y > yArr[1]) {
        yArr[1] = y;
      }
    }
  }

  if (xArr[1] == -1) {
    [xArr[1], yArr[1]] = [xArr[0] + 1, yArr[0] + 1];
    return [xArr[0], yArr[0], xArr[1], yArr[1]];
  }
  return [xArr[0], yArr[0], ++xArr[1], ++yArr[1]];
}

