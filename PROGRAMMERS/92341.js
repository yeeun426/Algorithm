function solution(fees, records) {
  const timeMap = new Map();
  const recordMap = new Map();

  for (let i = 0; i < records.length; i++) {
    let [time, car, action] = records[i].split(" ");

    if (action === "OUT") {
      let [inHour, inMin] = recordMap.get(car).split(":").map(Number);
      let [outHour, curMin] = time.split(":").map(Number);

      let inTime = inHour * 60 + inMin;
      let outTime = outHour * 60 + curMin;
      let parkTime = outTime - inTime;

      recordMap.delete(car);

      if (timeMap.has(car)) {
        timeMap.set(car, timeMap.get(car) + parkTime);
      } else {
        timeMap.set(car, parkTime);
      }
    } else {
      recordMap.set(car, time);
    }
  }
  isNotOutRecords(recordMap, timeMap);
  return calculateCosts(fees, timeMap);
}

// 출차 기록 없는 경우
function isNotOutRecords(recordMap, timeMap) {
  for (let [car, time] of recordMap) {
    let [inHour, inMin] = time.split(":").map(Number);

    let inTime = inHour * 60 + inMin;
    let outTime = 23 * 60 + 59;
    let parkTime = outTime - inTime;

    if (timeMap.has(car)) {
      timeMap.set(car, timeMap.get(car) + parkTime);
    } else {
      timeMap.set(car, parkTime);
    }
  }
}

// 차량 번호 오름차순 + 주차비 계산
function calculateCosts(fees, timeMap) {
  const [basicTime, basicCharge, unitTime, unitCharge] = fees;
  const answer = [];
  const sortedTimeMap = [...timeMap.entries()].sort((a, b) => a[0] - b[0]);

  for (let [car, time] of sortedTimeMap) {
    if (time <= basicTime) {
      answer.push(basicCharge);
    } else {
      let cost =
        basicCharge + Math.ceil((time - basicTime) / unitTime) * unitCharge;
      answer.push(cost);
    }
  }
  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ],
  ),
);

console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ],
  ),
);

// Map의 경우 차량 번호 오름차순
