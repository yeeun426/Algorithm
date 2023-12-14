let input = require("fs").readFileSync("예제.txt").toString().trim();

function solution(input) {
  let regex = /(\d+|[A-Z*#])/g;
  let match = regex.exec(input);
  let dartResult = [];

  while (match !== null) {
    // 매칭된 숫자와 문자를 배열에 추가
    dartResult.push(match[0]);
    // 다음 매치를 찾음
    match = regex.exec(input);
  }

  var answer = 0;
  const bonus = { S: 1, D: 2, T: 3 };
  const resultArr = [];

  for (let i = 0; i < dartResult.length; i += 2) {
    resultArr.push(dartResult[i] ** bonus[dartResult[i + 1]]);
    if (dartResult[i + 2] === "*") {
      resultArr[resultArr.length - 1] *= 2;
      if (resultArr.length > 1) resultArr[resultArr.length - 2] *= 2;
      i++;
    } else if (dartResult[i + 2] === "#") {
      resultArr[resultArr.length - 1] *= -1;
      i++;
    }
  }
  answer = resultArr.reduce(function add(sum, cur) {
    return sum + cur;
  }, 0);

  return answer;
}

console.log(solution(input));
