function solution(msg) {
    let answer = [];
    let dic = {};
    
    // 초기 사전 생성
    for (let i = 0; i < 26; i++) {
        dic[String.fromCharCode(i + 65)] = i + 1;
    }
    
    let currentWord = '';
    let nextIndex = 27; // A-Z를 넘어서는 색인
    
    for (let i = 0; i < msg.length; i++) {
        currentWord += msg[i];
        
        // 사전에 없는 경우
        if (!(currentWord in dic)) {
            // 이전 단어의 색인을 결과에 추가
            answer.push(dic[currentWord.slice(0, -1)]);
            // 새 단어를 사전에 추가
            dic[currentWord] = nextIndex++;
            // currentWord 초기화
            currentWord = msg[i];
        }
    }
    
    // 마지막 단어 처리
    if (currentWord) {
        answer.push(dic[currentWord]);
    }
    
    return answer;
}
