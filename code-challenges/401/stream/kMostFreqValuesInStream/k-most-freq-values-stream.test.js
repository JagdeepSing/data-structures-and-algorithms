'use strict';

const getMaxCount = require('./k-most-freq-values-stream');

class Stream {
  constructor(string) {
    this.stream = string.split('');
  }

  getNext() {
    if (this.stream.length === 0) {
      return null;
    }
    return this.stream.shift();
  }
}

describe('kth most frequent values in stream', () => {
  it('returns k most common values', () => {
    // a: 3, b: 4, c: 2, d: 1
    const fakeStream = new Stream('abcadbbcab');

    expect(getMaxCount(fakeStream, 3)).toEqual(['b', 'a', 'c']);
  });
});
