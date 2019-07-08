'use strict';

const chessCheck = require('../chessCheck');

describe('Chess board in check', () => {
  it('In check', () => {
    const boardInCheck = [
      ['k', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', 'kn', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['r', '', '', '', '', '', '', ''],
    ];
    expect(chessCheck(boardInCheck)).toBeTruthy();
  });

  it('Not in check', () => {
    const boardNotInCheck = [
      ['k', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', 'r', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', 'kn', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
    ];
    expect(chessCheck(boardNotInCheck)).toBeFalsy();
  });
});
