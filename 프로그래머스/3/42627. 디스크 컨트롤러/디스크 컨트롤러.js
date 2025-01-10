function solution(jobs) {
    var answer = 0;
    jobs.sort((a, b) => a[0] - b[0]);
    const queue = [];
    let time = 0;
    let i = 0;
    while(queue.length > 0 || i < jobs.length) {
        if(jobs.length > i && jobs[i][0] <= time) {
            queue.push(jobs[i++]);
            queue.sort((a, b) => a[1] - b[1]);
            continue;
        }
        if(queue.length > 0) {
            let [ start, work ] = queue.shift();
            answer = answer + time - start + work;
            time += work;
        } else if(queue.length == 0) {
            time = jobs[i][0];
        }
    }

    return parseInt(answer / jobs.length);
}