function solution(keyinput, board) {
    let answer = [0, 0];
    let maxX = Math.floor(board[0] / 2);
    let maxY = Math.floor(board[1] / 2);

    for (let input of keyinput) {
        switch (input) {
            case "up":
                if (answer[1] < maxY) answer[1]++;
                break;
            case "down":
                if (answer[1] > -maxY) answer[1]--;
                break;
            case "left":
                if (answer[0] > -maxX) answer[0]--;
                break;
            case "right":
                if (answer[0] < maxX) answer[0]++;
                break;
        }
    }
    return answer;
}