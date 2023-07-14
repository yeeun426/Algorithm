let S = +require('fs').readFileSync('/dev/stdin').toString();

const queue =  [];
const check = {};

queue.push([1, 0, 0]); // [화면에 있는 개수, 클립보드, 걸린 시간] 
check[`1,0`] = 1 ; // 화면에 있는 개수, 클립보드 check

while (queue.length) {
    [screen, clip, time] = queue.shift();

    for(calculation of [[screen, screen],[screen + clip, clip],[screen - 1, clip]]) {
        [nextScreen, nextClip] = calculation;

        if(check[`${nextScreen}, ${nextClip}`]) continue;
        if((!nextScreen && !nextClip) || nextScreen < 0) continue;
        
        // 화면에 이모티콘 개수가 S면 멈추기
        if(nextScreen === S) return console.log(time + 1);
        
        check[`${nextScreen}, ${nextClip}`] = 1;
        queue.push([nextScreen, nextClip, time + 1]);
    }
}
