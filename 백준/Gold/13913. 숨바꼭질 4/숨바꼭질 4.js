let [N, K] = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number);

const visited = Array(100001).fill(0);
const path = Array(100001).fill(0);

function bfs(N) {
    const queue = [];
    queue.push([N, 0]); // [수빈이의 위치, 0]

    while (queue.length) {
        // cur : 현재 위치, time : 초
        const [cur, time] = queue.shift();

        //현재 위치와 동생의 위치(k)가 같을 때 break;
        if (cur === K) return time

        for (next of [cur - 1, cur + 1, cur * 2]) {
            if (!visited[next] && next >= 0 && next <= 100000) {
                path[next] = cur;
                visited[next] = 1;
                queue.push([next, time + 1]);
            }
        }
    }
}

const time = bfs(N);
const order = [];
order.push(K);
let prev = path[K];
for (let i = 0; i < time; i++) {
    order.push(prev);
    prev = path[prev];
}

console.log(`${time}\n${order.reverse().join(" ")}`);