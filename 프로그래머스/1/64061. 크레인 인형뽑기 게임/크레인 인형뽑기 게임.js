function solution(board, moves) {
    var answer = 0;
    const boardTopColumnIdxs = Array(board[0].length).fill(0)

    for(let column=0;column<board[0].length;column++){
        for(let row=0;row<board.length;row++){
            if(board[row][column] !== 0){
                boardTopColumnIdxs[column] = row
                break;
            }
        }
    }

    const stack = []
    moves.forEach(move=>{
        const columnIdx = move-1
        const rowIdx = boardTopColumnIdxs[columnIdx]
        boardTopColumnIdxs[columnIdx]++
        if(board[rowIdx] !== undefined){
            const lastStackValue = stack.at(-1)
            const pushStackValue = board[rowIdx][columnIdx]
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