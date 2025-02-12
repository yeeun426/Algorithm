function solution(tickets) {
    const answer = [];
    const visited = new Set()

    
    const graph = {};
    for(const [start, end] of tickets) {
        if(!graph[start]) graph[start] = [];
        if(!graph[end]) graph[end] = [];

        graph[start].push(end)
    }
    
    for (const key in graph) {
        graph[key].sort();
    }

    function dfs(cur, route) {
        if(route.length === tickets.length + 1) {
          answer.push([...route])
          return answer
        }
        for(let i = 0; i < graph[cur].length; i++) {
            const des = graph[cur][i];
            const ticket = `${cur}->${des}`;

            if(!visited.has(ticket) || (i >= 1 && ticket === `${cur}->${graph[cur][i-1]}`)) {
                visited.add(ticket);
                route.push(des);
                dfs(des, route);
                route.pop();
                visited.delete(ticket);
            }
        }
  }
  dfs("ICN", ["ICN"]);

  return answer[0];
}
