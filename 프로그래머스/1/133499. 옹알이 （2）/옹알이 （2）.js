function solution(babbling) {
  var answer = 0;
  const speak = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];

    for (let j = 0; j < 4; j++) {
      if (word.includes(speak[j].repeat(2))) break;
      word = word.split(speak[j]).join(" ");
    }

    if (!word.split(" ").join("").length) answer++;
  }

  return answer;
}
