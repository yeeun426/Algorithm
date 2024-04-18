let [N, ...input] = require("fs").readFileSync("예제.txt").toString().split("\n");
const map = input.map(x => x.split("").map(Number));
const visited = new Array(+N).fill().map(() => new Array(+N).fill(0));
let house_num = 0;
let house_count = {}; // 집 번호의 개수를 저장할 객체

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for(let i = 0; i < +N; i++){
    for(let j = 0; j < +N; j++){
        if(map[i][j] == 1 && visited[i][j]==0){
            house_num++;
            dfs(i,j)
        }
    }
}

console.log(house_num);
console.log(house_count);

function dfs(x, y) {
    visited[x][y] = 1;
    map[x][y] = house_num;
    for (let i = 0 ; i < 4 ; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx >= 0 && nx < +N && ny >= 0 && ny < +N && map[nx][ny] === 1 && visited[nx][ny] === 0) {
            dfs(nx, ny);
        }
    }
}
console.log(map);