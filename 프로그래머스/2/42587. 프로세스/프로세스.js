function solution(priorities, location) {
    let answer = 0;
    const queue = priorities.map((priority, index) => ({ priority, index }));

    while (queue.length > 0) {
        const priorObj = queue.shift();
        const hasMaxPrior = queue.some(job => job.priority > priorObj.priority);
        if (hasMaxPrior) {
            queue.push(priorObj);
        } else {
            answer++;
            if (priorObj.index === location) {
                break;
            }
        }
    }
    return answer;
}
