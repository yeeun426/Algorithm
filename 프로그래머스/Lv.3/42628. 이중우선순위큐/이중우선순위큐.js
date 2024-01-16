function solution(operations) {
    var answer = [];
    const queue = [];
    
    for(let i = 0 ; i < operations.length ; i++) {
        let [command, num] = operations[i].split(" ");
        if (command === "I") {
            queue.push(Number(num));
            queue.sort((a,b) => a-b)
        } else if(command === "D" && num === "1") {
            queue.pop();
        } else {
            queue.shift();
        }
    }

    if(queue.length > 0) {
        answer.push(queue[queue.length-1], queue[0])
    }
    
    return answer.length ? answer : [0,0];
}