let [N, K] = require('fs').readFileSync('예제.txt').toString().split(" ").map(Number);

const visit = Array.from({ length: 100001 }, () => 0);

const queue = [];
queue.push([N, 0]); // [수빈이의 위치, 0]
visit[N] = 1;

while (queue.length) {
    const [cur, time] = queue.shift();
    
    console.log(cur, time)
    // 현재 위치가 K(동생 위치)에 도착한다면 time찍기
    if (cur === K) {
      console.log(time);
      break;
    }

    // 다음 위치는 cur-1, cur+1, cur * 2
    for (next of [cur - 1, cur + 1, cur * 2]) {
      if (!visit[next] && next >= 0 && next <= 100000) {
        visit[next] = 1;
        queue.push([next, time + 1]);
        }
    }
}
