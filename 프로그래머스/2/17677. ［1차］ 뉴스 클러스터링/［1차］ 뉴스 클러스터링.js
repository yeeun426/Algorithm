function solution(str1, str2) {
  var answer = 0;

  const strArr1 = [];
  const strArr2 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    const string1 = str1.toLowerCase().slice(i, i + 2);
    if (/^[a-z]{2}$/.test(string1)) strArr1.push(string1);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const string2 = str2.toLowerCase().slice(i, i + 2);
    if (/^[a-z]{2}$/.test(string2)) strArr2.push(string2);
  }

  let intersection = 0;
  let union = strArr1.length + strArr2.length;

  if (strArr1.length === 0 && strArr2.length === 0) return 65536;

  for (let i = 0; i < strArr1.length; i++) {
    for (let j = 0; j < strArr2.length; j++) {
      if (strArr1[i] === strArr2[j]) {
        intersection++;
        strArr2.splice(j, 1);
        j--;
        break;
      }
    }
  }
    
  answer = intersection / (union - intersection);
  return parseInt(answer * 65536);
}