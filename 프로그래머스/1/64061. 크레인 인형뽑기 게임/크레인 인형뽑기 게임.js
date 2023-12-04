function solution(board, moves) {
    var answer = 0;
    const isExistIdx = Array(board.length).fill(0);
    
    for(let column = 0 ; column < board.length ; column++){
        for(let row = 0 ; row < board.length ; row++){
            if(board[row][column] !== 0){
                isExistIdx[column] = row // 격자 안에 인형이 들어있기 시작하는 위치 idx
                break;
            }
        }
    }
    
    const stack = []
    moves.forEach(move => {
        const columnIdx = move-1;
        const rowIdx = isExistIdx[columnIdx];
        isExistIdx[columnIdx]++;
        
        if(board[rowIdx] !== undefined){
            const lastStackValue = stack.at(-1);
            const pushStackValue = board[rowIdx][columnIdx];
            if(lastStackValue === pushStackValue){
                stack.pop()
                answer += 2
            }
            else{
                stack.push(board[rowIdx][columnIdx])
            }
        }
    })

    return answer;
}