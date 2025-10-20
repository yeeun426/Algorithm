function solution(phone_book) {
  var answer = true;
  const phoneBookSet = new Set(phone_book);

  for (let phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      const prefix = phone.slice(0, i);
      if (phoneBookSet.has(prefix)) return false;
    }
  }
  return answer;
}