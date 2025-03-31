const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [scoreA, scoreB] = [0, 0]; // 각 팀의 현재 점수
const timeLog = []; // 시간과 점수 변화

let totalTime = [0, 0]; // 각 팀이 점수 승리를 가졌던 총 시간

input.forEach((entry) => {
  const [team, time] = entry.split(" ");
  const [mm, ss] = time.split(":").map(Number);
  const currentTime = mm * 60 + ss; // 총 초(second) 단위로 변환

  team === "1" ? scoreA++ : scoreB++;

  // 현재 어느 팀이 앞서 있는지 기록
  if (scoreA > scoreB) {
    timeLog.push([1, currentTime]);
  } else if (scoreB > scoreA) {
    timeLog.push([2, currentTime]);
  } else {
    timeLog.push([0, currentTime]);
  }
});

// 경기 종료 시간(48:00, 즉 2880초)을 push
timeLog.push([0, 2880]);

// 점수 우위를 가진 시간 계산
for (let i = 1; i < timeLog.length; i++) {
  const [prevTeam, prevTime] = timeLog[i - 1]; // 이전 기록의 팀과 시간
  const [, curTime] = timeLog[i]; // 현재 시간

  // 직전까지 점수 승리인 팀이 존재하면, 해당 팀의 총 시간에 반영
  if (prevTeam !== 0) {
    totalTime[prevTeam - 1] += curTime - prevTime;
  }
}

// 시간을 "MM:SS" 형식으로 변환
// padStart(2, "0") → 한 자리 숫자를 두 자리로 만들어 "05", "09" 같은 형태를 유지.
const formattedTime = totalTime
  .map((time) => {
    const mm = String(Math.floor(time / 60)).padStart(2, "0"); // 분을 두 자리 형식으로 변환
    const ss = String(time % 60).padStart(2, "0"); // 초를 두 자리 형식으로 변환
    return `${mm}:${ss}`;
  })
  .join("\n");

console.log(formattedTime);
