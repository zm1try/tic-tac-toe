class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.board = [[null,null,null],[null,null,null],[null,null,null]];
        this.winner = null;
        this.count = 0;
        this.finish = false;
        this.draw = false;
        this.next = false;
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.finish) {
            this.symbol = 'x';
            this.board = [[null,null,null],[null,null,null],[null,null,null]];
            this.winner = null;
            this.count = 0;
            this.finish = false;
            this.draw = false;
        } 

        if (this.board[rowIndex][columnIndex] == null) {
            this.board[rowIndex][columnIndex] = this.symbol;
            this.next = true;
            this.count++;
        }
        else this.next = false;
        

        if (this.board[0][0] == this.board[1][0] && this.board[1][0] == this.board[2][0] && this.board[2][0] != null) {
            this.winner = this.symbol;
            this.finish = true;
        }
        else
            if (this.board[0][1] == this.board[1][1] && this.board[1][1] == this.board[2][1] && this.board[2][1] != null) {
                this.winner = this.symbol;
                this.finish = true;
            }
            else
                if (this.board[0][2] == this.board[1][2] && this.board[1][2] == this.board[2][2] && this.board[2][2] != null) {
                    this.winner = this.symbol;
                    this.finish = true;
                }
                else
                    if (this.board[0][0] == this.board[0][1] && this.board[0][1] == this.board[0][2] && this.board[0][2] != null) {
                        this.winner = this.symbol;
                        this.finish = true;
                    }
                    else
                        if (this.board[1][0] == this.board[1][1] && this.board[1][1] == this.board[1][2] && this.board[1][2] != null) {
                            this.winner = this.symbol;
                            this.finish = true;
                        }
                        else
                            if (this.board[2][0] == this.board[2][1] && this.board[2][1] == this.board[2][2] && this.board[2][2] != null) {
                                this.winner = this.symbol;
                                this.finish = true;
                            }
                            else
                                if (this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2] && this.board[2][2] != null) {
                                    this.winner = this.symbol;
                                    this.finish = true;
                                }   else
                                    if (this.board[2][0] == this.board[1][1] && this.board[1][1] == this.board[0][2] && this.board[0][2] != null) {
                                        this.winner = this.symbol;
                                        this.finish = true;
                                    }
                                    else
                                        if (this.count == 9) {
                                            this.draw = true;
                                            this.winner = null;
                                            this.finish = true; 
                                        }

        if (this.next) this.symbol = (this.symbol == 'x') ? 'o' : 'x';

    }

    isFinished() {
        return this.finish;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        return (this.count == 9)? true : false;
    }

    isDraw() {
        return this.draw;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;