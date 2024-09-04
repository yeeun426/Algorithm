function solution(N, stages) {
  var answer = [];
  let curPlayer = stages.length;
  const curStage = {};

  for (let i = 1; i <= N; i++) {
    curStage[i] = 0;
  }

  stages.forEach((stage) => {
    if (curStage[stage] >= 0) {
      curStage[stage]++;
    }
  });

  for (let key in curStage) {
    curPlayer -= curStage[key];
    curStage[key] /= curPlayer + curStage[key];
  }

  let failArr = Object.entries(curStage);
  failArr.sort((a, b) => b[1] - a[1]);
  answer = failArr.map(([key, value]) => Number(key));

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
