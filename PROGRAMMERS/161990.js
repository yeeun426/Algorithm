function solution(wallpaper) {
  let minX = 51,
    minY = 51,
    maxX = -1,
    maxY = -1;

  for (let x = 0; x < wallpaper.length; x++) {
    for (let y = 0; y < wallpaper[x].length; y++) {
      if (wallpaper[x][y] === "#") {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  return [minX, minY, maxX + 1, maxY + 1];
}
