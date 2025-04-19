function solution(s) {
  var answer = "";
  const words = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      answer += s[i];
      continue;
    }

    for (let len = 3; len <= 5; len++) {
      let str = s.slice(i, i + len).join("");
      if (words[str] >= 0) {
        answer += words[str];
        i += len - 1;
        continue;
      }
    }
  }

  return +answer;
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
