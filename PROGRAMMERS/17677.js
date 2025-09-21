function solution(str1, str2) {
  var answer = 0;
  let inter = 0;
  let union = 0;

  str1 = str1.toLowerCase();
  const str1Arr = [];
  for (let i = 0; i < str1.length - 1; i++) {
    const pair = str1[i] + str1[i + 1];
    if (/^[a-z]{2}$/.test(pair)) {
      str1Arr.push(pair);
    }
  }

  str2 = str2.toLowerCase();
  const str2Arr = [];
  for (let i = 0; i < str2.length - 1; i++) {
    const pair = str2[i] + str2[i + 1];
    if (/^[a-z]{2}$/.test(pair)) {
      str2Arr.push(pair);
    }
  }

  const map1 = new Map();
  const map2 = new Map();

  str1Arr.forEach((v) => {
    map1.set(v, (map1.get(v) || 0) + 1);
  });
  str2Arr.forEach((v) => {
    map2.set(v, (map2.get(v) || 0) + 1);
  });

  for (let [str, cnt] of map1) {
    if (map2.has(str)) {
      inter += Math.min(cnt, map2.get(str));
      union += Math.max(cnt, map2.get(str));
      map2.delete(str);
    } else {
      union += cnt;
    }
  }

  for (let v of map2.values()) {
    console.log(v);
    union += v;
  }

  answer = union === 0 ? 65536 : Math.floor((inter / union) * 65536);

  if (str1) return answer;
}

console.log(solution("FRANCE", "french"));
