function solution(name) {
  // 최소 이동 횟수 계산
  // A -> B VS A -> Z
  function minMoves(char) {
    return Math.min(
      char.charCodeAt(0) - "A".charCodeAt(0),
      "Z".charCodeAt(0) - char.charCodeAt(0) + 1
    );
  }

  var answer = 0;
  let nameLength = name.length;
  for (let i = 0; i < nameLength; i++) {
    answer += minMoves(name[i]);
  }

  // 왼쪽이나 오른쪽 방향 중 어느 쪽으로 이동할지 결정하여 최소 이동 횟수 계산
  let minTurns = nameLength - 1; // 처음에는 모든 문자를 한번씩만 방문
  for (let i = 0; i < nameLength; i++) {
    let nextIndex = i + 1;
    while (nextIndex < nameLength && name[nextIndex] === "A") {
      nextIndex++;
    }
    let distance =
      i + nameLength - nextIndex + Math.min(i, nameLength - nextIndex);
    minTurns = Math.min(minTurns, distance);
  }

  answer += minTurns;

  return answer;
}

console.log(solution("JAZ"));
