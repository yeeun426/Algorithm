let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input[0].split(" ").map(Number);
const box = [];
const queue = [];

for(let i = 1 ; i <= N ; i++) {
    box.push(input[i].split(" ").map(Number));

    for(let j = 0 ; j < box[i-1].length ; j++) {
        if(box[i-1][j] === 1) {
            queue.push([i-1, j]);
        }
    }
}

  let day = 0;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let prevIdx = 0;    // 조회를 시작할 인덱스
    while (true) {
      const curIdx = queue.length; // queue 크기는 계속 늘어나므로 queue.length-1 까지 조회한다.
      let change = 0;
      for (let i = prevIdx; i < curIdx; i++) {
        const [x, y] = queue[i];
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
          if (!box[nx][ny]) {
            change = 1;
            box[nx][ny] = day + 1;
            queue.push([nx, ny]);
          }
        }
      }
      if (!change) break;
      day++;
      prevIdx = curIdx; // curIdx-1까지 조회가 끝나면, curIdx부터 다시 조회를 시작한다.
    }
  

for (let i = 0; i < N; i++) {
    if (box[i].includes(0)) {
        day = -1;
    }
}

console.log(day);
