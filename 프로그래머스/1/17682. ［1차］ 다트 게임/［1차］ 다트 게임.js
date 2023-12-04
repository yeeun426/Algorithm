function solution(dartResult) {
  let regex = /(\d+|[A-Z*#])/g;
  let match = regex.exec(dartResult);
  let dartArr = [];

  while (match !== null) {
    dartArr.push(match[0]);
    match = regex.exec(dartResult);
  }
    
  var answer = 0;
  const bonus = { S: 1, D: 2, T: 3 };
  const resultArr = [];

  for (let i = 0; i < dartArr.length; i += 2) {
    resultArr.push(dartArr[i] ** bonus[dartArr[i + 1]]);
    if (dartArr[i + 2] === "*") {
      resultArr[resultArr.length - 1] *= 2;
      if (resultArr.length > 1) resultArr[resultArr.length - 2] *= 2;
      i++;
    } else if (dartArr[i + 2] === "#") {
      resultArr[resultArr.length - 1] *= -1;
      i++;
    }
  }

  answer = resultArr.reduce(function add(sum, cur) {
    return sum + cur;
  }, 0);

  return answer;
}