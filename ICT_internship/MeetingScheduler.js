let input = require('fs').readFileSync('예제.txt').toString().trim().split("\n");
const meetingTimings = [];

let n = 5;

for(let i = 0 ; i < n ; i++) {
    meetingTimings.push(input[i].split(" ").map(Number));
}

function getMinRooms(meetingTimings) {
    const n = meetingTimings.length;

    let lastTime = 0;
    for (let i = 0; i < n; i++) {
        if (lastTime < meetingTimings[i][1]) lastTime = meetingTimings[i][1];
    }

    const time = Array(lastTime + 1).fill(0);
    let answer = 0;
    console.log(time);

    for (let i = 0; i < n; i++) {
        let [start, end] = meetingTimings[i];

        time[start]++; // 시작 시간에 1을 증가시킵니다.
        time[end]--; // 종료 시간에 1을 감소시킵니다.

        console.log(time);

    }

    let currRooms = 0; // 현재 사용 중인 회의실 개수
    for (let t = 0; t <= lastTime; t++) {
        currRooms += time[t]; // 시간대별로 회의실 개수를 누적합니다.
        console.log(currRooms)
        answer = Math.max(answer, currRooms); // 최대 회의실 개수를 업데이트합니다.
    }
    return answer;
}

// 시작
// function getMinRooms(meetingTimings) {
//     const n = meetingTimings.length;
    
//     let answer = 0;

//     const time = {};

//     for (let i = 0 ; i < n ; i++) {
//         let [start, end] = meetingTimings[i];

//         for(let n = start ; n < end ; n++) {
//             {time[n] ? time[n]++ : time[n]=1}
//             if(answer < time[n]) answer = time[n];
//         }
//     }

//     return answer;
// }

// 시간 초과
// 시작
// function getMinRooms(meetingTimings) {
//     const n = meetingTimings.length;

//     let lastTime = 0;
//     for(let i = 0 ; i < n ; i++) {
//         if(lastTime < meetingTimings[i][1]) lastTime = meetingTimings[i][1];
//     }

//     // 가장 마지막 회의 종료 시간
//     const time = Array(lastTime+1).fill(0);
    
//     let answer = 0;

//     for (let i = 0 ; i < n ; i++) {
//         let [start, end] = meetingTimings[i];

//         for(let n = start ; n < end ; n++) {
//             time[n]++;
//             if(answer < time[n]) answer = time[n];
//         }
//     }

//     return answer;
// }

console.log(getMinRooms(meetingTimings))

