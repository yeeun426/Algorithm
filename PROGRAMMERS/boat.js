// [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript)
// 투포인터로 푸는 경우 solutio
function solution(people, limit) {
  people.sort((a, b) => b - a);
  let answer = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    answer++;
  }

  return answer;
}
