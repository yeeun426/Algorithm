function minArrowThickness(N, K, P, board, thickness) {
  let minThicknessSum = Infinity;

  function dfs(arrowIdx, score, thicknessSum) {
    if (score >= P) {
      minThicknessSum = Math.min(minThicknessSum, thicknessSum);
      return;
    }
    if (arrowIdx >= K) return; // 모든 화살을 사용했으면 종료
    let arrowSize = thickness[arrowIdx];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] > 0) {
          // 유효한 점수인 경우
          dfs(
            arrowIdx + 1,
            score + board[i][j] * arrowSize,
            thicknessSum + arrowSize,
          );
        }
      }
    }
  }

  dfs(0, 0, 0);

  return minThicknessSum === Infinity ? -1 : minThicknessSum;
}

// 예제 실행
const N = 3,
  K = 2,
  P = 8;
const board = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 3],
];
const thickness = [1, 2];

console.log(minArrowThickness(N, K, P, board, thickness)); // 출력: 3
