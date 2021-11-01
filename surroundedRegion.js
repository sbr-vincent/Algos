const solve = board => {
    for (let i = 0; i < board.length; i++) {
        checkBoard(i, 0, board)
        checkBoard(i, board[i].length - 1, board)
    }

    for (let i = 0; i < board[0].length; i++) {
        checkBoard(0, i, board)
        checkBoard(board.length - 1, i, board)
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == "O") {
                board[i][j] = "X"
            }
            if (board[i][j] == "S") {
                board[i][j] = "O"
            }
        }
    }
}

const checkBoard = (i, j, board) => {
    if (board[i] == undefined || board[i][j] == undefined || board[i][j] != "O") {
        return
    }
    board[i][j] = "S"
    checkBoard(i + 1, j, board)
    checkBoard(i - 1, j, board)
    checkBoard(i, j + 1, board)
    checkBoard(i, j - 1, board)
}