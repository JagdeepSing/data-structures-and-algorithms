const flagSort = require('../flag');

describe('El Salvador Flag sorter', () => {
  let array = ['b', 'w', 'b', 'b', 'w', 'w', 'w', 'w', 'b', 's', 'w'];
  let array2 = ['b', 'w', 'b', 'b', 'w', 'w', 'w', 'b', 's'];

  xit('sorts correctly', () => {
    expect(flagSort(array)).toEqual(['b', 'b', 'w', 'w', 'w', 's', 'w', 'w', 'w', 'b', 'b']);
    expect(flagSort(array2)).toEqual(['b', 'b', 'w', 'w', 's', 'w', 'w', 'b', 'b']);
  });
});
