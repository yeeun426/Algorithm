function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    const graph = new Array(102).fill(-1).map(() => new Array(102).fill(-1));
    const visited = new Array(102).fill(1).map(() => new Array(102).fill(1));
    
    for(let rec of rectangle) {
        let [x1, y1, x2, y2] = rec.map(r => r * 2);
        for(let i = x1 ; i <= x2 ; i++) {
            for(let j = y1 ; j <= y2 ; j++) {
                if(i > x1 && i < x2 && j > y1 && j < y2) {
                    graph[i][j] = 0;
                } else if (graph[i][j] !== 0) {
                    graph[i][j] = 1;
                }
            }
        }
    }

    const dx = [-1, 1, 0 , 0];
    const dy = [0, 0, -1, 1];
    const deque = [[characterX * 2, characterY * 2]];
    
    while(deque.length > 0) {
        const [x, y] = deque.shift();
        
        if(x === itemX * 2 && y === itemY * 2) {
            answer = Math.floor(visited[x][y] / 2);
            break;
        }
        
        for(let k = 0 ; k < 4 ; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            
            if(graph[nx][ny] == 1 && visited[nx][ny] == 1) {
                deque.push([nx, ny]);
                visited[nx][ny] = visited[x][y] + 1;
            }
        }
    }
    return answer;
}