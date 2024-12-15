function solution(record) {
  var answer = [];
  const message = [];
  const nameMap = new Map();

  for (let i = 0; i < record.length; i++) {
    const [act, id, name] = record[i].split(" ");

    switch (act) {
      case "Enter":
        message.push(["E", id]);
        nameMap.set(id, name);
        break;
      case "Leave":
        message.push(["L", id]);
        break;
      default:
        nameMap.set(id, name);
    }
  }

  for (let i = 0; i < message.length; i++) {
    const [act, id] = message[i];
    const name = nameMap.get(id);

    if (act === "E") {
      answer.push(`${name}님이 들어왔습니다.`);
    } else if (act === "L") {
      answer.push(`${name}님이 나갔습니다.`);
    }
  }

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ]),
);
