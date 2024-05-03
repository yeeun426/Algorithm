function solution (n, edge) {
    const graph = new Array(n+1).fill().map(_ => []);
    const distance = new Array(n+1).fill(-1); 
    for(const e of edge) { // 연결 노드 추가
        graph[e[0]].push(e[1]);
        graph[e[1]].push(e[0]);
    }
    
    distance[1] = 0;   
    const queue = [1];
    
    while(queue.length) {
        const cur = queue.shift();
        
        for(const i of graph[cur]) {
            if(distance[i] === -1) {
                distance[i] = distance[cur] + 1;
                queue.push(i);
            } 
        }
    }
    const max = Math.max(...distance);
    return distance.filter(el => el === max).length;
}
