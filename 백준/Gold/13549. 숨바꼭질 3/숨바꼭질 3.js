let [N, K] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

const visited = Array(100001).fill(0);

function bfs(N) {
    const queue = [];
    queue.push([N, 0]); // [수빈이의 위치, 0]

    while (queue.length) {
        // cur : 현재 위치, time : 초
        const [cur, time] = queue.shift();

        //현재 위치와 동생의 위치(k)가 같을 때 break;
        if (cur === K) return time

        // 움직일 수 있는 위치
        // path에 나타내기
        if(!visited[cur * 2] && cur * 2 >= 0 && cur * 2 <= 100000) {
            visited[cur * 2] = 1;
            queue.push([cur * 2, time]);
        }

        for (next of [cur - 1, cur + 1]) {
            if (!visited[next] && next >= 0 && next <= 100000) {
                visited[next] = 1;
                queue.push([next, time + 1]);
            }
        }
    }
}

console.log(bfs(N));