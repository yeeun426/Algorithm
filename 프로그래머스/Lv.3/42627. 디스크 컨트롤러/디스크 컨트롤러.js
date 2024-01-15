function solution(jobs) {
    const n = jobs.length;

    let answer = 0;
    let currentTime = 0; // 현재 시간

    while (jobs.length > 0) {
        let minIndex = -1;
        let minDuration = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < jobs.length; i++) {
            const [start, duration] = jobs[i];

            if (start <= currentTime && duration < minDuration) {
                // 작업의 시작 시간이 현재 시간 이전이고 소요시간이 가장 적은 작업 선택
                minIndex = i;
                minDuration = duration;
            }
        }

        if (minIndex === -1) {
            // 현재 시간 이전에 들어온 작업이 없으면 현재 시간을 증가시킴
            currentTime++;
        } else {
            // 선택한 작업을 수행하고 배열에서 제거
            const [start, duration] = jobs[minIndex];
            currentTime += duration;
            answer += currentTime - start;
            jobs.splice(minIndex, 1);
        }
    }

    // 평균 계산 후 소수점 이하 버림
    return Math.floor(answer / n);
}