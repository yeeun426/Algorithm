function solution(maps) {    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    function bfs(x, y) {
        const queue = [];
        queue.push([x, y]);
        
        while(queue.length) {
            const [x, y] = queue.shift();
            
            for(let i = 0 ; i < 4 ; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];      
                if(nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length) continue;
                if(maps[nx][ny] === 0) continue;
                if(maps[nx][ny] === 1) {
                    maps[nx][ny] = maps[x][y] + 1;
                    queue.push([nx, ny]);
                } 
            }
        }
        return maps[maps.length-1][maps[0].length-1]
    }
    var answer = bfs(0,0);

    return answer == 1 ? -1 : answer ;
}