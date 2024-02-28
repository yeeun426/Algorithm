function solution(n, lost, reserve) {
  let answer = 0;
  const students = Array(n + 1).fill(1);

  lost.forEach((st) => students[st]--);
  reserve.forEach((st) => students[st]++);

  students.shift();
  console.log(students);
  for (let i = 0; i < n; i++) {
    if (students[i] !== 0) continue;
    if (students[i - 1] > 1) {
      students[i - 1]--;
      students[i]++;
    } else if (students[i + 1] > 1) {
      students[i + 1]--;
      students[i]++;
    }
  }
  console.log(students);
  students.forEach((student) => {
    if (student > 0) answer++;
  });
  return answer;
}

console.log(solution(5, [2, 4], [3]));
