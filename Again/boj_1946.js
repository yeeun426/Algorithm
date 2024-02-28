let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
  const N = parseInt(input.shift());
  let applicants = input
    .splice(0, N)
    .map((v) => v.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
  let answer = 1;
  let topInterviewRank = applicants[0][1];
  for (let j = 1; j < N; j++) {
    if (applicants[j][1] < topInterviewRank) {
      answer++;
      topInterviewRank = applicants[j][1];
    }
    if (topInterviewRank === 1) break;
  }
  console.log(answer);
}
