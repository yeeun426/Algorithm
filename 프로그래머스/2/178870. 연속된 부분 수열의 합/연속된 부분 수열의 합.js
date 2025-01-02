function solution(sequence, k) {
  let answer = [];
  let [left, right] = [0, 0];
  let sum = sequence[0];
  let minLength = 1000000;

  while (right < sequence.length) {
    if (sum === k) {
      if (minLength > right - left) {
        minLength = right - left;
        answer = [left, right];
      }
      sum -= sequence[left];
      left++;
    } else if (sum < k) {
      right++;
      if (right < sequence.length) sum += sequence[right];
    } else {
      sum -= sequence[left];
      left++;
    }
  }
  return answer;
}