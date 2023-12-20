function solution(progresses, speeds) {
    var answer = [];
    const remainigArr = [];
    for(let i = 0 ; i < progresses.length ; i++) {
        remaining = 100-progresses[i];
        remainigArr.push(Math.ceil(remaining/speeds[i]));
    }
    let maxDay = remainigArr[0];
    let deployCount = 1;

    for (let i = 1; i < remainigArr.length; i++) {
        if (remainigArr[i] <= maxDay) {
            // 현재 기능이 이전 배포에 함께 배포될 것
            deployCount++;
        } else {
            // 현재 기능부터 새로운 배포 시작
            answer.push(deployCount);
            deployCount = 1;
            maxDay = remainigArr[i];
        }
    }
    // 마지막 배포 처리
    answer.push(deployCount);
    return answer;
}