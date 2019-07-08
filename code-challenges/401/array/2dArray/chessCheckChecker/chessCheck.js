'use strict';

module.exports = chessCheck;

/**
 * Checks if a given chess board is in check, only for Rook and Knight.
 *
 * k  = king, one in any direction
 * kn = knight, L shape, 2 in UDLR, 1 LR
 * q  = queen, any amount in any single direction
 * b  = bishop, any amount in diagonal
 * r  = rook, any amount UDLR
 *
 * @param {Array} board : 2D array, 8x8
 */
function chessCheck(board) {
  const kingPos = _getKingPosition(board);

  return _checkRook(board, kingPos) || _checkKnight(board, kingPos);
}

function _checkKnight(board, king) {
  const knightSpots = [board[king.row + 2][king.column + 1]];

  if (king.row >= 2) {
    if (king.column >= 1) {
      knightSpots.push(board[king.row - 2][king.column - 1]);
    }
    knightSpots.push(board[king.row - 2][king.column + 1]);
  }

  if (king.column >= 1) {
    knightSpots.push(board[king.row + 2][king.column - 1]);
  }

  return knightSpots.includes('kn');
}

function _checkRook(board, kingPos) {
  const kingRow = board[kingPos.row];
  const kingColumn = board.map((row) => row[kingPos.column]);

  return kingRow.includes('r') || kingColumn.includes('r');
}

function _getKingPosition(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'k') {
        return { row: i, column: j };
      }
    }
  }
  return null;
}
