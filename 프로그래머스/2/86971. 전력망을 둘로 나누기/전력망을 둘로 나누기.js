function solution(n, wires) {
    let answer = Infinity;
    let tree = new Array(n + 1);
    for (let i = 0; i < tree.length; i++) {
        tree[i] = [];
    }

    for (let i = 0; i < wires.length; i++) {
        let wire = wires[i];
        let node1 = wire[0];
        let node2 = wire[1];
        tree[node1].push(node2);
        tree[node2].push(node1);
    }

    for (let i = 0; i < wires.length; i++) {
        let wire = wires[i];
        let network1 = bfs(wire[0], wire[1], tree, new Array(n + 1).fill(false));
        let network2 = bfs(wire[1], wire[0], tree, new Array(n + 1).fill(false));
        answer = Math.min(Math.abs(network1 - network2), answer);
    }


    return answer;
}

function bfs(node1, node2, tree, visited) {
    let count = 1;
    let queue = [];
    visited[node1] = true;
    queue.push(node1);

    while (queue.length > 0) {
        let current = queue.shift();
        tree[current].forEach(next => {
            if (!visited[next] && next !== node2) {
                count++;
                visited[next] = true;
                queue.push(next);
            }
        });
    }

    return count;
}
