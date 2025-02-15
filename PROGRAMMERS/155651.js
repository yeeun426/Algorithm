function solution(book_time) {
  const room = [];

  book_time.sort().forEach(([start, end]) => {
    const startTime = changeMinute(start);
    const endTime = changeMinute(end) + 10;
    console.log(start, startTime, end, endTime);

    // 시작 시간(startTime)보다 작은 값 서치 => 사용이 끝난 방 확인
    const idx = room.findIndex((v) => v <= startTime);

    // 없다면 종료 시간(endTime) push => 방 추가
    // 있다면 해당 room의 종료 시간(endTime) 갱신 => 사용이 끝난 방에 들어감
    if (idx === -1) room.push(endTime);
    else room[idx] = endTime;
  });

  return room.length;
}

function changeMinute(str) {
  const [hour, minute] = str.split(":").map(Number);
  return hour * 60 + minute;
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ]),
);
