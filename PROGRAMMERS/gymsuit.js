function solution(n, lost, reserve) {
  var answer = 0;
  const students = Array(n).fill(1);

  lost.forEach((st) => students[st - 1]--);
  reserve.forEach((st) => students[st - 1]++);

  for (let i = 0; i < students.length; i++) {
    if (students[i] !== 0) continue;
    if (students[i - 1] > 1) {
      students[i]++;
      students[i - 1]--;
    } else if (students[i + 1] > 1) {
      students[i]++;
      students[i + 1]--;
    }
  }
  students.forEach((st) => {
    if (st > 0) answer++;
  });
  return answer;
}
