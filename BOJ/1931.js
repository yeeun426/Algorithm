let input = require('fs').readFileSync('예제.txt').toString().split("\n");
const N = +input.shift();
const meetingTimes = [];

for(let i = 0 ; i < N ; i++) {
    meetingTimes.push(input[i].split(" ").map(Number));
}

const times = meetingTimes.sort(function(a,b) {
    if(a[1] === b[1]) {
        return a[0] - b[0]
    } else {
        return a[1] - b[1];
    }
})

let cnt = 1;
let nowEndMeeting = meetingTimes[0][1];

for(let i = 1 ; i )