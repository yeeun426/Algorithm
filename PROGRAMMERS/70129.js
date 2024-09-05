function solution(s) {
  let cnt = 0;
  let zero_sum = 0;

  while (s !== "1") {
    let removedZero = s.split("0").join("");
    zero_sum += s.length - removedZero.length;
    s = removedZero.length.toString(2);
    cnt++;
  }

  return [cnt, zero_sum];
}
