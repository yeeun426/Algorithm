function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    console.log(routes);
    var answer = 1;
    let [start, out] = routes.shift();

    while(routes.length > 0) {
        
        if(out >= routes[0][0] && out <= routes[0][1]) {
            routes.shift();
        } else {
            [start, out] = routes.shift();
            answer++;
        }
    }
    return answer;
}