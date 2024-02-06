function solution(word) {
    var answer = 0;
    const words = ['A', 'E', 'I', 'O', 'U'];
    const wordArr = [];

    function dfs(current, depth) {
        if (depth <= 5) {
            wordArr.push(current);

            for (let i = 0; i < words.length; i++) {
                dfs(current + words[i], depth + 1);
            }
        }
    }

    dfs('', 0);
    answer = wordArr.indexOf(word);
    return answer;
}
