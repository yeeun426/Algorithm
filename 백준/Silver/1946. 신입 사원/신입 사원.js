let [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

for (let i = 0; i < +T; i++) {
  let N = parseInt(input.shift());
  let applicants = input
    .splice(0, N)
    .map((v) => v.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
  let answer = 1;
  let topInterviewScore = applicants[0][1];

  for (let i = 1; i < N; i++) {
    if (applicants[i][1] < topInterviewScore) {
      // 현재 지원자가 이전 지원자보다 우수한 경우
      topInterviewScore = applicants[i][1];
      // 현재 지원자의 면접 성적을 top으로 업데이트
      answer++; // 현재 지원자 선발
    }
    if (topInterviewScore === 1) break;
  }
  console.log(answer);
}
