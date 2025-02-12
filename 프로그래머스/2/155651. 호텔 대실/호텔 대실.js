function solution(book_time) {
  const room = [];

  book_time.sort().forEach(([start, end]) => {
    const startTime = changeMinute(start);
    const endTime = changeMinute(end) + 10;

    const idx = room.findIndex((v) => v <= startTime);

    if (idx === -1) room.push(endTime);
    else room[idx] = endTime;
  });

  return room.length;
}

function changeMinute(str) {
  const [hour, minute] = str.split(":").map(Number);
  return hour * 60 + minute;
}